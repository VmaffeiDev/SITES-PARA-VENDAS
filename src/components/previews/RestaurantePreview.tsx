const menu = [
  {
    category: "Entradas",
    items: [
      { name: "Bruschetta Trio", price: "R$ 32", desc: "Tomate confit, alho-poró e queijo de cabra.", icon: "🍅", color: "bg-red-50" },
      { name: "Carpaccio de Filé", price: "R$ 45", desc: "Lâminas finas com alcaparras e parmesão.", icon: "🥩", color: "bg-rose-50" },
    ],
  },
  {
    category: "Principais",
    items: [
      { name: "Risoto de Funghi", price: "R$ 68", desc: "Arbóreo cremoso com cogumelos frescos.", badge: "Mais pedido", icon: "🍄", color: "bg-amber-50" },
      { name: "Salmão Grelhado", price: "R$ 79", desc: "Com legumes salteados e molho de ervas.", icon: "🐟", color: "bg-orange-50" },
      { name: "Tagliatelle ao Sugo", price: "R$ 54", desc: "Massa fresca artesanal com molho da casa.", icon: "🍝", color: "bg-red-50" },
      { name: "Risoto de Camarão", price: "R$ 84", desc: "Camarões grelhados com toque de limão siciliano.", icon: "🍤", color: "bg-amber-50" },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Tiramisù", price: "R$ 28", desc: "Receita tradicional italiana da casa.", icon: "🍰", color: "bg-yellow-50" },
      { name: "Petit Gâteau", price: "R$ 30", desc: "Com sorvete de creme e calda de chocolate.", icon: "🍫", color: "bg-orange-50" },
    ],
  },
];

export default function RestaurantePreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex items-center justify-between border-b border-neutral-100 px-8 py-5">
        <span className="text-lg font-bold text-amber-700">Sabor & Cia</span>
        <span className="rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white">
          Reservar mesa
        </span>
      </header>

      <section className="bg-gradient-to-br from-amber-500 to-red-400 px-8 py-16 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-widest">Cozinha italiana contemporânea</p>
        <h1 className="mt-3 text-3xl font-extrabold">Uma experiência à mesa que você não esquece</h1>
        <span className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-amber-700">
          Ver cardápio completo
        </span>
      </section>

      <section className="px-8 py-14">
        <h2 className="text-center text-xl font-bold text-amber-800">Nosso cardápio</h2>
        {menu.map((group) => (
          <div key={group.category} className="mt-10">
            <h3 className="border-b border-amber-100 pb-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
              {group.category}
            </h3>
            <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
              {group.items.map((dish) => (
                <div key={dish.name} className="flex gap-4 rounded-xl border border-neutral-100 p-5 shadow-sm">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-2xl ${dish.color}`}>
                    {dish.icon}
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold">{dish.name}</p>
                      <span className="whitespace-nowrap text-amber-700 font-bold">{dish.price}</span>
                    </div>
                    {"badge" in dish && dish.badge && (
                      <span className="mt-1 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                        {dish.badge}
                      </span>
                    )}
                    <p className="mt-2 text-sm text-neutral-500">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-neutral-50 px-8 py-8 text-center text-xs text-neutral-500">
        Aberto de terça a domingo, 18h às 23h · Rua das Flores, 120 · © Sabor & Cia — conteúdo de demonstração
      </footer>
    </div>
  );
}
