type Mode = "menu" | "screensaver" | "learner";

type ModeSelectorProps = {
  onSelect: (mode: Exclude<Mode, "menu">) => void;
};

export function ModeSelector({ onSelect }: ModeSelectorProps) {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 md:px-10">
      <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">Spanish • English</p>
      <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] text-zinc-900 md:text-7xl">
        Learn the 1000 most common Spanish words.
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-700 md:text-xl">
        Choose a calm 24/7 flashcard screensaver or enter structured learning
        mode with progressive rounds and matching tests.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect("screensaver")}
          className="group rounded-sm border border-zinc-900/10 bg-[#ece4d9] p-8 text-left transition duration-500 hover:-translate-y-1 hover:border-zinc-900/25 hover:shadow-2xl hover:shadow-black/10"
        >
          <p className="text-xs tracking-[0.18em] text-zinc-600 uppercase">Mode 01</p>
          <h2 className="mt-4 font-serif text-4xl text-zinc-900">Flashcard Screensaver</h2>
          <p className="mt-4 max-w-md text-zinc-700">
            A single card glides and bounces like a classic DVD logo, flipping
            between Spanish and English endlessly.
          </p>
          <span className="mt-7 inline-flex items-center gap-2 border-b border-zinc-900 pb-1 text-sm tracking-wide text-zinc-900 transition group-hover:gap-3">
            Enter screensaver <span aria-hidden>→</span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => onSelect("learner")}
          className="group rounded-sm border border-zinc-900/10 bg-[#e7ddd0] p-8 text-left transition duration-500 hover:-translate-y-1 hover:border-zinc-900/25 hover:shadow-2xl hover:shadow-black/10"
        >
          <p className="text-xs tracking-[0.18em] text-zinc-600 uppercase">Mode 02</p>
          <h2 className="mt-4 font-serif text-4xl text-zinc-900">Flashcard Learner</h2>
          <p className="mt-4 max-w-md text-zinc-700">
            Learn 20 words per round, then complete a 10-word matching test
            pulled from everything you&apos;ve studied so far.
          </p>
          <span className="mt-7 inline-flex items-center gap-2 border-b border-zinc-900 pb-1 text-sm tracking-wide text-zinc-900 transition group-hover:gap-3">
            Start learning <span aria-hidden>→</span>
          </span>
        </button>
      </div>
    </section>
  );
}
