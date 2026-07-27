const gallery = [
  "bg-violet-200",
  "bg-purple-200",
  "bg-fuchsia-200",
  "bg-violet-300",
  "bg-purple-300",
  "bg-fuchsia-300",
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

      <section className="grid grid-cols-3 gap-2 px-4 pb-4">
        {gallery.map((color, index) => (
          <div key={index} className={`aspect-square ${color}`} />
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
