import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[96svh] overflow-hidden" aria-labelledby="hero-title">
      <Image
        src="https://images.unsplash.com/photo-1465800872432-7cd16cef9f34?auto=format&fit=crop&w=2200&q=80"
        alt="Architectural interior with warm natural tones"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />

      <div className="relative mx-auto grid min-h-[96svh] max-w-7xl items-end gap-10 px-6 pb-16 md:px-10 md:pb-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14 lg:pb-16">
        <div>
          <Reveal>
            <p className="mb-6 text-sm tracking-[0.22em] text-stone-100 uppercase">
              Creative Direction • Visual Identity • Digital Craft
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="max-w-5xl font-serif text-5xl leading-[0.95] text-stone-50 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Quiet luxury for brands that lead with image.
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-100/90 md:text-lg">
              We create editorial-led brand ecosystems with refined typography,
              atmospheric photography, and fluid digital experiences.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex rounded-full bg-stone-100 px-7 py-3 text-xs tracking-[0.16em] text-zinc-900 uppercase transition hover:bg-white"
              >
                Start a Project
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex rounded-full border border-stone-200/80 px-7 py-3 text-xs tracking-[0.16em] text-stone-100 uppercase transition hover:bg-stone-100/10"
              >
                View Portfolio
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280} className="hidden lg:block">
          <aside className="soft-grain rounded-sm border border-stone-100/25 bg-black/25 p-8 text-stone-100 backdrop-blur-sm">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-300">Now Booking</p>
            <p className="mt-4 font-serif text-3xl leading-tight">
              Autumn / Winter
              <br />
              2026 Partnerships
            </p>
            <p className="mt-5 text-sm leading-relaxed text-stone-200/90">
              Limited engagements for boutique hospitality, interiors, and
              cultural brands.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
