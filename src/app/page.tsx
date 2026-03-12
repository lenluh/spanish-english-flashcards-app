"use client";

import { useState } from "react";
import { LearnerMode } from "@/components/flashcards/LearnerMode";
import { ModeSelector } from "@/components/flashcards/ModeSelector";
import { ScreensaverMode } from "@/components/flashcards/ScreensaverMode";
import { spanishEnglishWords } from "@/data/spanishEnglishWords";

type Mode = "menu" | "screensaver" | "learner";

export default function Home() {
  const [mode, setMode] = useState<Mode>("menu");

  if (mode === "screensaver") {
    return <ScreensaverMode words={spanishEnglishWords} onExit={() => setMode("menu")} />;
  }

  if (mode === "learner") {
    return <LearnerMode words={spanishEnglishWords} onExit={() => setMode("menu")} />;
  }

  return (
    <main className="min-h-screen bg-[#f3eee8]">
      <ModeSelector onSelect={setMode} />
    </main>
  );
}
