const categories = ["Todos", "Colares", "Brincos", "Pulseiras", "Anéis"];

const categoryIcons: Record<string, string> = {
  Colares: "📿",
  Brincos: "✨",
  Pulseiras: "⭕",
  Anéis: "💍",
};

const products = [
  { name: "Colar Aurora", price: "R$ 89", category: "Colares", color: "bg-rose-100", badge: "Mais vendido", rating: 5 },
  { name: "Brinco Luna", price: "R$ 59", category: "Brincos", color: "bg-amber-100", rating: 4 },
  { name: "Pulseira Nima", price: "R$ 69", category: "Pulseiras", color: "bg-emerald-100", rating: 5 },
  { name: "Anel Terra", price: "R$ 49", category: "Anéis", color: "bg-teal-100", rating: 4 },
  { name: "Colar Vento", price: "R$ 99", category: "Colares", color: "bg-lime-100", badge: "Novo", rating: 5 },
  { name: "Brinco Sol", price: "R$ 55", category: "Brincos", color: "bg-orange-100", rating: 4 },
  { name: "Pulseira Areia", price: "R$ 65", category: "Pulseiras", color: "bg-rose-200", rating: 5 },
  { name: "Anel Lua", price: "R$ 45", category: "Anéis", color: "bg-amber-200", badge: "Mais vendido", rating: 5 },
  { name: "Colar Estrela", price: "R$ 79", category: "Colares", color: "bg-teal-200", rating: 4 },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-amber-500 text-xs">
      {"★".repeat(count)}
      <span className="text-neutral-200">{"★".repeat(5 - count)}</span>
    </span>
  );
}

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
        <span className="flex items-center gap-1 text-xs font-semibold text-neutral-700">
          <span aria-hidden className="text-xl">🛍️</span>
          3
        </span>
      </header>

      <section className="bg-gradient-to-r from-emerald-500 to-teal-400 px-8 py-14 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-widest">Coleção verão · Frete grátis acima de R$ 150</p>
        <h1 className="mt-3 text-3xl font-extrabold">Acessórios que combinam com você</h1>
        <span className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-emerald-700">
          Ver coleção
        </span>
      </section>

      <section className="flex flex-wrap gap-2 px-8 pt-8">
        {categories.map((category, index) => (
          <span
            key={category}
            className={`rounded-full px-4 py-1.5 text-xs font-medium ${
              index === 0
                ? "bg-emerald-700 text-white"
                : "border border-neutral-200 text-neutral-600"
            }`}
          >
            {category}
          </span>
        ))}
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5 px-8 py-8">
        {products.map((product) => (
          <div key={product.name} className="overflow-hidden rounded-xl border border-neutral-100 shadow-sm">
            <div className={`relative flex h-28 items-center justify-center ${product.color}`}>
              <span className="text-4xl opacity-70">{categoryIcons[product.category]}</span>
              {product.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-neutral-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-wide text-neutral-400">{product.category}</p>
              <p className="font-semibold">{product.name}</p>
              <Stars count={product.rating} />
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

      <footer className="border-t border-neutral-100 bg-neutral-50 px-8 py-10 text-xs text-neutral-500">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-neutral-700">Camila Acessórios</p>
            <p className="mt-2">Peças autorais feitas à mão, direto para você.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-700">Atendimento</p>
            <p className="mt-2">WhatsApp · Seg a Sex, 9h às 18h</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-700">Pagamento</p>
            <p className="mt-2">Pix · Cartão em até 12x · Boleto</p>
          </div>
        </div>
        <p className="mt-8 text-center text-neutral-400">
          © Camila Acessórios — conteúdo de demonstração
        </p>
      </footer>
    </div>
  );
}
