import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="services" className="bg-[#e6ddd2] py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase">Let&apos;s Build Something Enduring</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-zinc-900 md:text-6xl">
          Looking for a creative partner with a strong editorial eye?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-700">
          Share your goals and timeline. We&apos;ll shape a tailored direction for
          your next launch, campaign, or digital flagship.
        </p>
        <Link
          href="#contact"
          className="mt-10 inline-flex rounded-full bg-zinc-900 px-8 py-3 text-xs tracking-[0.16em] text-[#f5f1eb] uppercase transition hover:bg-zinc-800"
        >
          Enquire Now
        </Link>
      </Reveal>
    </section>
  );
}
