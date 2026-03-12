import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-900/15 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-serif text-2xl text-zinc-900">Atelier Nove</p>
          <p className="mt-4 max-w-xs text-sm text-zinc-600">
            Boutique creative direction for brands in culture, hospitality, and
            lifestyle.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="space-y-2 text-sm text-zinc-700">
          <Link href="#work" className="block hover:text-zinc-900">
            Work
          </Link>
          <Link href="#studio" className="block hover:text-zinc-900">
            Studio
          </Link>
          <Link href="#services" className="block hover:text-zinc-900">
            Services
          </Link>
        </nav>

        <div className="text-sm text-zinc-700">
          <p>hello@ateliernove.example</p>
          <p className="mt-1">+1 (555) 014-2377</p>
          <div className="mt-5 flex gap-4">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-zinc-900">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-zinc-500">
            © {new Date().getFullYear()} Atelier Nove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
