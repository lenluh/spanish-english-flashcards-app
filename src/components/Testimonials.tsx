import { Reveal } from "@/components/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  clients: string[];
};

export function Testimonials({ testimonials, clients }: TestimonialsProps) {
  return (
    <section id="journal" className="bg-[#1f1b19] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.18em] text-stone-400 uppercase">Selected Clients</p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm text-stone-300 md:gap-x-10 md:text-base">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 80}>
              <figure className="border-t border-stone-200/25 pt-6">
                <blockquote className="font-serif text-2xl leading-snug text-stone-100">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-stone-400">
                  <span className="font-medium text-stone-200">{item.name}</span>
                  <br />
                  {item.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
