const dishes = [
  { name: "Risoto de Funghi", price: "R$ 68", desc: "Arbóreo cremoso com cogumelos frescos." },
  { name: "Salmão Grelhado", price: "R$ 79", desc: "Com legumes salteados e molho de ervas." },
  { name: "Tagliatelle ao Sugo", price: "R$ 54", desc: "Massa fresca artesanal com molho da casa." },
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
        <h2 className="text-center text-xl font-bold text-amber-800">Destaques do cardápio</h2>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
          {dishes.map((dish) => (
            <div key={dish.name} className="rounded-xl border border-neutral-100 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{dish.name}</p>
                <span className="text-amber-700 font-bold">{dish.price}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-neutral-50 px-8 py-8 text-center text-xs text-neutral-500">
        Aberto de terça a domingo, 18h às 23h · © Sabor & Cia — conteúdo de demonstração
      </footer>
    </div>
  );
}
