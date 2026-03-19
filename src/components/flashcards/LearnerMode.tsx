"use client";

import { useMemo, useState } from "react";
import type { WordPair } from "@/data/spanishEnglishWords";
import { sampleWords, shuffleArray } from "@/lib/flashcards";

type LearnerModeProps = {
  words: WordPair[];
  onExit: () => void;
};

type Phase = "learn" | "test";

export function LearnerMode({ words, onExit }: LearnerModeProps) {
  const [phase, setPhase] = useState<Phase>("learn");
  const [learnedCount, setLearnedCount] = useState(20);
  const [testWords, setTestWords] = useState<WordPair[]>([]);
  const [shuffledEnglish, setShuffledEnglish] = useState<WordPair[]>([]);
  const [selectedSpanishId, setSelectedSpanishId] = useState<number | null>(null);
  const [selectedEnglishId, setSelectedEnglishId] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  const sessionWords = useMemo(() => shuffleArray(words), [words]);
  const learnedWords = useMemo(() => sessionWords.slice(0, learnedCount), [sessionWords, learnedCount]);
  const currentBatch = useMemo(() => {
    const start = Math.max(learnedCount - 20, 0);
    return sessionWords.slice(start, learnedCount);
  }, [learnedCount, sessionWords]);

  const roundNumber = Math.max(1, Math.ceil(learnedCount / 20));

  const evaluateSelection = (spanishId: number, englishId: number) => {
    setAttempts((prev) => prev + 1);

    if (spanishId === englishId && !matchedIds.includes(spanishId)) {
      setMatchedIds((prev) => [...prev, spanishId]);
      setCorrectMatches((prev) => prev + 1);
    }

    window.setTimeout(() => {
      setSelectedSpanishId(null);
      setSelectedEnglishId(null);
    }, 180);
  };

  const handleSpanishSelect = (id: number) => {
    setSelectedSpanishId(id);
    if (selectedEnglishId !== null) {
      evaluateSelection(id, selectedEnglishId);
    }
  };

  const handleEnglishSelect = (id: number) => {
    setSelectedEnglishId(id);
    if (selectedSpanishId !== null) {
      evaluateSelection(selectedSpanishId, id);
    }
  };

  const startTest = () => {
    const sampled = sampleWords(learnedWords, 10);
    setTestWords(sampled);
    setShuffledEnglish(shuffleArray(sampled));
    setMatchedIds([]);
    setAttempts(0);
    setCorrectMatches(0);
    setSelectedSpanishId(null);
    setSelectedEnglishId(null);
    setActiveStudyIndex(0);
    setShowEnglish(false);
    setPhase("test");
  };

  const continueLearning = () => {
    if (learnedCount < words.length) {
      setLearnedCount((prev) => Math.min(prev + 20, words.length));
    }
    setActiveStudyIndex(0);
    setShowEnglish(false);
    setPhase("learn");
  };

  const testComplete = matchedIds.length === testWords.length && testWords.length > 0;
  const studyWord = currentBatch[activeStudyIndex] ?? currentBatch[0];

  return (
    <section className="h-[100dvh] overflow-hidden bg-[#f3eee8] px-3 py-3 md:px-5 md:py-4">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-[0.18em] text-stone-500 uppercase">Flashcard Learner</p>
            <h1 className="mt-1 font-serif text-3xl text-zinc-900 md:text-4xl">Round {roundNumber}</h1>
          </div>

          <div className="flex items-center gap-2">
            <p className="rounded-full border border-zinc-900/15 px-3 py-1.5 text-xs text-zinc-700">
              Learned: <strong>{learnedCount}</strong> / 1000
            </p>
            <button
              type="button"
              onClick={onExit}
              className="rounded-full border border-zinc-900/20 px-4 py-1.5 text-[10px] tracking-[0.16em] text-zinc-900 uppercase transition hover:bg-zinc-900 hover:text-[#f3eee8]"
            >
              Back
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1">
          {phase === "learn" ? (
            <div className="flex h-full min-h-0 flex-col gap-3">
              <div className="grid gap-3 rounded-sm border border-zinc-900/10 bg-[#ebe2d7] p-4 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-[10px] tracking-[0.16em] text-zinc-600 uppercase">Learn 20 new words</p>
                  <h2 className="mt-1 font-serif text-2xl text-zinc-900 md:text-3xl">
                    Study first, then do your 10-word matching test.
                  </h2>
                </div>
                <div className="text-zinc-700">
                  <p className="text-sm leading-relaxed">
                    Current test pool: <strong>{learnedCount}</strong> words.
                  </p>
                  <button
                    type="button"
                    onClick={startTest}
                    className="mt-3 rounded-full bg-zinc-900 px-5 py-2 text-[10px] tracking-[0.16em] text-[#f3eee8] uppercase transition hover:bg-zinc-800"
                  >
                    Start 10-word test
                  </button>
                </div>
              </div>

              <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex min-h-0 flex-col rounded-sm border border-zinc-900/10 bg-[#f8f4ef] p-4">
                  <p className="text-[10px] tracking-[0.16em] text-zinc-500 uppercase">
                    Card {activeStudyIndex + 1} of {currentBatch.length}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowEnglish((prev) => !prev)}
                    className="mt-2 flex min-h-40 flex-1 flex-col items-center justify-center rounded-sm border border-zinc-900/15 bg-white/70 p-4 text-center transition hover:border-zinc-900/35"
                  >
                    <span className="text-[10px] tracking-[0.16em] text-zinc-500 uppercase">
                      {showEnglish ? "English" : "Español"}
                    </span>
                    <span className="mt-3 font-serif text-4xl text-zinc-900 md:text-5xl">
                      {showEnglish ? studyWord?.english : studyWord?.spanish}
                    </span>
                    <span className="mt-2 text-xs text-zinc-600">Tap card to flip</span>
                  </button>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStudyIndex((prev) => (prev === 0 ? currentBatch.length - 1 : prev - 1));
                        setShowEnglish(false);
                      }}
                      className="rounded-full border border-zinc-900/20 px-3 py-1.5 text-[10px] tracking-[0.14em] text-zinc-900 uppercase transition hover:bg-zinc-900 hover:text-[#f3eee8]"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStudyIndex((prev) => (prev + 1) % currentBatch.length);
                        setShowEnglish(false);
                      }}
                      className="rounded-full border border-zinc-900/20 px-3 py-1.5 text-[10px] tracking-[0.14em] text-zinc-900 uppercase transition hover:bg-zinc-900 hover:text-[#f3eee8]"
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStudyIndex(Math.floor(Math.random() * currentBatch.length));
                        setShowEnglish(false);
                      }}
                      className="rounded-full border border-zinc-900/20 px-3 py-1.5 text-[10px] tracking-[0.14em] text-zinc-900 uppercase transition hover:bg-zinc-900 hover:text-[#f3eee8]"
                    >
                      Random
                    </button>
                  </div>
                </div>

                <div className="grid min-h-0 gap-2 overflow-auto rounded-sm border border-zinc-900/10 bg-[#f7f2eb] p-3 md:grid-cols-2">
                  {currentBatch.map((word, index) => (
                    <button
                      key={word.id}
                      type="button"
                      onClick={() => {
                        setActiveStudyIndex(index);
                        setShowEnglish(false);
                      }}
                      className={`rounded-sm border p-3 text-left transition ${
                        activeStudyIndex === index
                          ? "border-zinc-900 bg-zinc-900 text-[#f3eee8]"
                          : "border-zinc-900/10 bg-white/70 text-zinc-900 hover:border-zinc-900/35"
                      }`}
                    >
                      <p className="font-serif text-xl leading-tight">{word.spanish}</p>
                      <p
                        className={`mt-1 text-xs ${
                          activeStudyIndex === index ? "text-stone-300" : "text-zinc-600"
                        }`}
                      >
                        {word.english}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex h-full min-h-0 flex-col gap-3">
              <div className="rounded-sm border border-zinc-900/10 bg-[#e9dfd3] p-3 text-xs text-zinc-700">
                Click one Spanish word and one English word to match pairs. Score: <strong>{correctMatches}</strong> / {testWords.length} • Attempts: {attempts}
              </div>

              <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-2">
                <div className="flex min-h-0 flex-col">
                  <h3 className="mb-2 text-[10px] tracking-[0.16em] text-zinc-500 uppercase">Spanish</h3>
                  <div className="min-h-0 space-y-2 overflow-auto">
                    {testWords.map((word) => {
                      const isMatched = matchedIds.includes(word.id);
                      const isSelected = selectedSpanishId === word.id;
                      return (
                        <button
                          key={word.id}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleSpanishSelect(word.id)}
                          className={`flex w-full items-center justify-between rounded-sm border px-3 py-2 text-left transition ${
                            isMatched
                              ? "border-emerald-600/30 bg-emerald-100 text-emerald-900"
                              : isSelected
                                ? "border-zinc-900 bg-zinc-900 text-[#f3eee8]"
                                : "border-zinc-900/10 bg-[#f8f4ef] text-zinc-900 hover:border-zinc-900/30"
                          }`}
                        >
                          <span className="font-serif text-xl">{word.spanish}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex min-h-0 flex-col">
                  <h3 className="mb-2 text-[10px] tracking-[0.16em] text-zinc-500 uppercase">English</h3>
                  <div className="min-h-0 space-y-2 overflow-auto">
                    {shuffledEnglish.map((word) => {
                      const isMatched = matchedIds.includes(word.id);
                      const isSelected = selectedEnglishId === word.id;
                      return (
                        <button
                          key={word.id}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleEnglishSelect(word.id)}
                          className={`flex w-full items-center justify-between rounded-sm border px-3 py-2 text-left transition ${
                            isMatched
                              ? "border-emerald-600/30 bg-emerald-100 text-emerald-900"
                              : isSelected
                                ? "border-zinc-900 bg-zinc-900 text-[#f3eee8]"
                                : "border-zinc-900/10 bg-[#f8f4ef] text-zinc-900 hover:border-zinc-900/30"
                          }`}
                        >
                          <span className="text-base">{word.english}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {testComplete ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/45 p-4">
                  <div className="w-full max-w-2xl rounded-sm border border-zinc-900/15 bg-[#1f1b19] p-6 text-stone-100">
                    <p className="text-[10px] tracking-[0.16em] text-stone-400 uppercase">Test complete</p>
                    <h3 className="mt-2 font-serif text-3xl">
                      Nice work — {correctMatches} correct in {attempts} attempts.
                    </h3>
                    <p className="mt-2 text-sm text-stone-300">
                      {learnedCount < words.length
                        ? `Ready for the next 20 words. Your next test will sample 10 random words out of ${Math.min(learnedCount + 20, words.length)}.`
                        : "You have reached all 1000 words. You can keep testing for retention anytime."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {learnedCount < words.length ? (
                        <button
                          type="button"
                          onClick={continueLearning}
                          className="rounded-full bg-stone-100 px-5 py-2 text-[10px] tracking-[0.16em] text-zinc-900 uppercase transition hover:bg-white"
                        >
                          Learn next 20 words
                        </button>
                      ) : null}
                      <button
                        type="button"
                        onClick={startTest}
                        className="rounded-full border border-stone-100/30 px-5 py-2 text-[10px] tracking-[0.16em] text-stone-100 uppercase transition hover:bg-stone-100 hover:text-zinc-900"
                      >
                        New random test
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
