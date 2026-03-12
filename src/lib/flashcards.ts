import type { WordPair } from "@/data/spanishEnglishWords";

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function sampleWords(words: WordPair[], amount: number): WordPair[] {
  return shuffleArray(words).slice(0, amount);
}

export function chunkRange(start: number, size: number): [number, number] {
  return [start, Math.min(start + size, 1000)];
}
