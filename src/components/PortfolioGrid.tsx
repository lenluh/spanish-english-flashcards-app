import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/siteContent";

type PortfolioGridProps = {
  projects: Project[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <section id="portfolio" className="bg-[#efe9e1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase">Selected Work</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-zinc-900 md:text-6xl">
            A portfolio of crafted narratives across space, image, and brand.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 60}>
              <article
                className={`group relative overflow-hidden bg-zinc-200 ${
                  project.tall ? "sm:row-span-2" : ""
                }`}
              >
                <div className={`relative ${project.tall ? "aspect-[4/6] h-full min-h-[26rem]" : "aspect-[4/5]"}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-2xl text-stone-50">{project.name}</p>
                  <p className="mt-1 text-xs tracking-[0.16em] text-stone-200 uppercase">
                    {project.category}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
