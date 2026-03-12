"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { WordPair } from "@/data/spanishEnglishWords";

type ScreensaverModeProps = {
  words: WordPair[];
  onExit: () => void;
};

const CARD_WIDTH = 320;
const CARD_HEIGHT = 200;

export function ScreensaverMode({ words, onExit }: ScreensaverModeProps) {
  const boundsRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 100, y: 120 });
  const velRef = useRef({ x: 1.4, y: 1.1 });
  const [position, setPosition] = useState({ x: 100, y: 120 });
  const [showSpanish, setShowSpanish] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  const activeWord = useMemo(() => words[wordIndex % words.length], [wordIndex, words]);

  useEffect(() => {
    const tick = () => {
      const bounds = boundsRef.current;
      if (!bounds) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const width = bounds.clientWidth;
      const height = bounds.clientHeight;
      const next = {
        x: posRef.current.x + velRef.current.x,
        y: posRef.current.y + velRef.current.y,
      };

      if (next.x <= 0 || next.x >= width - CARD_WIDTH) {
        velRef.current.x *= -1;
        next.x = Math.max(0, Math.min(next.x, width - CARD_WIDTH));
      }

      if (next.y <= 0 || next.y >= height - CARD_HEIGHT) {
        velRef.current.y *= -1;
        next.y = Math.max(0, Math.min(next.y, height - CARD_HEIGHT));
      }

      posRef.current = next;
      setPosition(next);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSpanish((prev) => !prev);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4400);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#161311]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffffff0e_0,transparent_40%),radial-gradient(circle_at_80%_80%,#d9bba23d_0,transparent_42%)]" />

      <button
        type="button"
        onClick={onExit}
        className="absolute top-6 left-6 z-20 rounded-full border border-stone-100/30 px-4 py-2 text-xs tracking-[0.16em] text-stone-100 uppercase transition hover:bg-stone-100 hover:text-zinc-900"
      >
        Back
      </button>

      <div className="absolute top-6 right-6 z-20 text-right text-stone-300">
        <p className="text-xs tracking-[0.18em] uppercase">24/7 Screensaver Mode</p>
        <p className="mt-1 text-sm opacity-80">Spanish ↔ English auto flip</p>
      </div>

      <div ref={boundsRef} className="relative h-screen w-screen">
        <div
          className="flashcard-3d absolute"
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <div className={`flashcard-inner ${showSpanish ? "" : "is-flipped"}`}>
            <div className="flashcard-face flashcard-front">
              <p className="text-xs tracking-[0.16em] text-stone-400 uppercase">Español</p>
              <p className="mt-3 font-serif text-5xl text-stone-100">{activeWord.spanish}</p>
            </div>
            <div className="flashcard-face flashcard-back">
              <p className="text-xs tracking-[0.16em] text-stone-300 uppercase">English</p>
              <p className="mt-3 font-serif text-5xl text-stone-50">{activeWord.english}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
