const filters = ["Todos", "Apartamento", "Casa", "Studio"];

const typeIcons: Record<string, string> = {
  Apartamento: "🏢",
  Casa: "🏠",
  Studio: "🏙️",
};

const listings = [
  { title: "Apto 2 quartos — Centro", price: "R$ 320.000", specs: "62m² · 2 quartos · 1 vaga", type: "Apartamento", color: "bg-sky-100", badge: "Destaque" },
  { title: "Casa em condomínio", price: "R$ 590.000", specs: "140m² · 3 quartos · 2 vagas", type: "Casa", color: "bg-cyan-100" },
  { title: "Studio mobiliado", price: "R$ 210.000", specs: "38m² · 1 quarto · 1 vaga", type: "Studio", color: "bg-sky-200" },
  { title: "Apto vista mar", price: "R$ 780.000", specs: "95m² · 3 quartos · 2 vagas", type: "Apartamento", color: "bg-cyan-200", badge: "Novo" },
  { title: "Casa térrea com quintal", price: "R$ 450.000", specs: "110m² · 3 quartos · 1 vaga", type: "Casa", color: "bg-sky-100" },
  { title: "Studio próximo ao metrô", price: "R$ 195.000", specs: "32m² · 1 quarto · 0 vaga", type: "Studio", color: "bg-cyan-100" },
];

export default function ImobiliariaPreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex flex-wrap items-center justify-between gap-y-2 border-b border-neutral-100 px-8 py-5">
        <span className="text-lg font-bold text-sky-800">Horizonte Imóveis</span>
        <nav className="flex gap-4 text-xs text-neutral-500">
          <span>Comprar</span>
          <span>Alugar</span>
          <span>Anunciar</span>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-sky-500 to-cyan-400 px-8 py-14 text-white">
        <h1 className="max-w-md text-3xl font-extrabold">Encontre o imóvel ideal para você</h1>
        <div className="mt-6 flex max-w-lg gap-2 rounded-full bg-white p-2">
          <span className="flex-1 px-3 py-2 text-sm text-neutral-400">
            Bairro, cidade ou código do imóvel
          </span>
          <span className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white">
            Buscar
          </span>
        </div>
      </section>

      <section className="flex flex-wrap gap-2 px-8 pt-8">
        {filters.map((filter, index) => (
          <span
            key={filter}
            className={`rounded-full px-4 py-1.5 text-xs font-medium ${
              index === 0
                ? "bg-sky-700 text-white"
                : "border border-neutral-200 text-neutral-600"
            }`}
          >
            {filter}
          </span>
        ))}
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 px-8 py-8">
        {listings.map((listing) => (
          <div key={listing.title} className="overflow-hidden rounded-xl border border-neutral-100 shadow-sm">
            <div className={`relative flex h-28 items-center justify-center ${listing.color}`}>
              <span className="text-4xl opacity-70">{typeIcons[listing.type]}</span>
              {listing.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-sky-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {listing.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-wide text-neutral-400">{listing.type}</p>
              <p className="font-semibold">{listing.title}</p>
              <p className="mt-1 text-xs text-neutral-500">{listing.specs}</p>
              <p className="mt-2 font-bold text-sky-700">{listing.price}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="border-t border-neutral-100 px-8 py-8 text-center text-xs text-neutral-400">
        © Horizonte Imóveis — conteúdo de demonstração
      </footer>
    </div>
  );
}
