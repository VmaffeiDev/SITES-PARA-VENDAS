const products = [
  { name: "Colar Aurora", price: "R$ 89", color: "bg-rose-100" },
  { name: "Brinco Luna", price: "R$ 59", color: "bg-amber-100" },
  { name: "Pulseira Nima", price: "R$ 69", color: "bg-emerald-100" },
  { name: "Anel Terra", price: "R$ 49", color: "bg-teal-100" },
  { name: "Colar Vento", price: "R$ 99", color: "bg-lime-100" },
  { name: "Brinco Sol", price: "R$ 55", color: "bg-orange-100" },
];

export default function LojaVirtualPreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex flex-wrap items-center justify-between gap-y-2 border-b border-neutral-100 px-8 py-5">
        <span className="text-lg font-bold text-emerald-700">Camila Acessórios</span>
        <nav className="flex gap-4 text-xs text-neutral-500">
          <span>Novidades</span>
          <span>Coleções</span>
          <span>Sobre</span>
        </nav>
        <span aria-hidden className="text-xl">🛍️</span>
      </header>

      <section className="bg-gradient-to-r from-emerald-500 to-teal-400 px-8 py-14 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-widest">Coleção verão</p>
        <h1 className="mt-3 text-3xl font-extrabold">Acessórios que combinam com você</h1>
        <span className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-emerald-700">
          Ver coleção
        </span>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5 px-8 py-12">
        {products.map((product) => (
          <div key={product.name} className="overflow-hidden rounded-xl border border-neutral-100 shadow-sm">
            <div className={`h-28 ${product.color}`} />
            <div className="p-4">
              <p className="font-semibold">{product.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-emerald-700 font-bold">{product.price}</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
                  Comprar
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="border-t border-neutral-100 px-8 py-8 text-center text-xs text-neutral-400">
        © Camila Acessórios — conteúdo de demonstração
      </footer>
    </div>
  );
}
