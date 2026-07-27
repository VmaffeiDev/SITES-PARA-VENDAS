const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Perguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Sites<span className="text-fuchsia-400">ParaVendas</span>
        </a>
        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#planos"
          className="rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
        >
          Quero meu site
        </a>
      </div>
    </header>
  );
}
