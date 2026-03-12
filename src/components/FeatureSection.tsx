import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Feature } from "@/data/siteContent";

type FeatureSectionProps = {
  feature: Feature;
  reverse?: boolean;
};

export function FeatureSection({ feature, reverse = false }: FeatureSectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-6 md:gap-16 md:px-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-zinc-200">
            <Image
              src={feature.image}
              alt={feature.alt}
              fill
              className="object-cover transition duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal className="max-w-xl">
          <p className="mb-3 text-xs tracking-[0.18em] text-zinc-500 uppercase">
            {feature.eyebrow}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
            {feature.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-700 md:text-lg">
            {feature.description}
          </p>
          <Link
            href={feature.href}
            className="mt-8 inline-flex items-center gap-2 border-b border-zinc-900 pb-1 text-sm tracking-wide text-zinc-900 transition hover:gap-3"
          >
            {feature.cta}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
