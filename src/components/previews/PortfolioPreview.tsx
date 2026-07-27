const categories = ["Todos", "Casamentos", "Ensaios", "Corporativo"];

const gallery = [
  { color: "bg-violet-200", category: "Casamentos" },
  { color: "bg-purple-200", category: "Ensaios" },
  { color: "bg-fuchsia-200", category: "Corporativo" },
  { color: "bg-violet-300", category: "Casamentos" },
  { color: "bg-purple-300", category: "Ensaios" },
  { color: "bg-fuchsia-300", category: "Corporativo" },
  { color: "bg-violet-100", category: "Casamentos" },
  { color: "bg-purple-100", category: "Ensaios" },
  { color: "bg-fuchsia-100", category: "Corporativo" },
];

export default function PortfolioPreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex flex-wrap items-center justify-between gap-y-2 px-8 py-5">
        <span className="text-lg font-bold tracking-wide">ANA DUARTE</span>
        <nav className="flex gap-4 text-xs text-neutral-500">
          <span>Trabalhos</span>
          <span>Sobre</span>
          <span>Contato</span>
        </nav>
      </header>

      <section className="px-8 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-500">
          Fotografia autoral
        </p>
        <h1 className="mx-auto mt-4 max-w-lg text-4xl font-light">
          Capturando histórias em cada <span className="font-bold text-violet-600">detalhe</span>
        </h1>
      </section>

      <section className="flex flex-wrap justify-center gap-2 px-8 pb-8">
        {categories.map((category, index) => (
          <span
            key={category}
            className={`rounded-full px-4 py-1.5 text-xs font-medium ${
              index === 0
                ? "bg-violet-600 text-white"
                : "border border-neutral-200 text-neutral-600"
            }`}
          >
            {category}
          </span>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-2 px-4 pb-4">
        {gallery.map((photo, index) => (
          <div key={index} className={`group relative aspect-square ${photo.color}`}>
            <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1.5 py-0.5 text-[9px] font-medium text-white opacity-0 transition group-hover:opacity-100">
              {photo.category}
            </span>
          </div>
        ))}
      </section>

      <section className="px-8 py-14 text-center">
        <p className="mx-auto max-w-md text-sm text-neutral-500">
          Ensaios, casamentos e campanhas com um olhar sensível para luz e movimento.
        </p>
        <span className="mt-6 inline-block rounded-full border border-violet-400 px-6 py-2 text-sm font-semibold text-violet-600">
          Solicitar orçamento
        </span>
      </section>

      <footer className="px-8 py-8 text-center text-xs text-neutral-400">
        © Ana Duarte Fotografia — conteúdo de demonstração
      </footer>
    </div>
  );
}
