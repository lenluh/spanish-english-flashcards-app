import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="studio" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase">Our Philosophy</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-900 md:text-6xl">
            Clarity over noise. Emotion over excess.
          </h2>
          <div className="mt-8 space-y-5 text-zinc-700">
            <p>
              Atelier Nove is a multidisciplinary studio helping founders and
              creative teams articulate a stronger visual point of view.
            </p>
            <p>
              Our process is collaborative and deliberately paced: we research,
              distill, design, and refine until every choice feels both precise
              and effortless.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait of the studio founder in natural window light"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
