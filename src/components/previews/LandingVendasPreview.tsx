const included = [
  "Plano alimentar simples de seguir",
  "Treinos de 20 minutos, sem academia",
  "Suporte direto no grupo exclusivo",
  "Receitas rápidas para o dia a dia",
  "Acompanhamento semanal de progresso",
];

const testimonials = [
  { name: "Marina T.", quote: "Perdi 6kg em 30 dias sem passar fome. Mudou minha rotina.", rating: 5 },
  { name: "Juliana R.", quote: "O suporte no grupo faz toda diferença nos dias difíceis.", rating: 5 },
  { name: "Patrícia A.", quote: "Treinos rápidos que cabem mesmo num dia corrido.", rating: 4 },
];

export default function LandingVendasPreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex items-center justify-between px-8 py-5">
        <span className="text-lg font-bold">Método Vitta</span>
        <span className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white">
          Quero começar
        </span>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-50 to-orange-50 px-8 py-16 text-center">
        <span className="rounded-full bg-fuchsia-100 px-4 py-1 text-xs font-semibold text-fuchsia-600">
          + de 4.000 alunas transformadas
        </span>
        <h1 className="mx-auto mt-6 max-w-lg text-4xl font-extrabold leading-tight">
          Recupere sua energia em <span className="text-fuchsia-600">30 dias</span>, sem dietas malucas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-600">
          Um método simples, guiado passo a passo, para caber na sua rotina real.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="rounded-full bg-fuchsia-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-600/30">
            Garantir minha vaga
          </span>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 px-8 py-14">
        {[
          { title: "Plano alimentar simples", icon: "🥗" },
          { title: "Treinos de 20 minutos", icon: "⏱️" },
          { title: "Suporte direto no grupo", icon: "💬" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-neutral-100 p-6 text-center shadow-sm">
            <span className="text-3xl">{item.icon}</span>
            <p className="mt-3 font-semibold">{item.title}</p>
          </div>
        ))}
      </section>

      <section className="bg-fuchsia-50/60 px-8 py-14">
        <h2 className="text-center text-xl font-bold">O que está incluso</h2>
        <ul className="mx-auto mt-6 max-w-md space-y-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-0.5 text-fuchsia-600">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-8 py-14">
        <h2 className="text-center text-xl font-bold">Quem já fez, recomenda</h2>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl border border-neutral-100 p-5 shadow-sm">
              <span className="text-amber-500 text-xs">{"★".repeat(testimonial.rating)}</span>
              <p className="mt-2 text-sm text-neutral-600">“{testimonial.quote}”</p>
              <p className="mt-3 text-xs font-semibold text-neutral-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 px-8 py-14 text-center text-white">
        <p className="text-sm uppercase tracking-wide text-fuchsia-400">Oferta de lançamento</p>
        <p className="mt-3 text-4xl font-extrabold">
          12x R$ 39<span className="align-top text-lg">,90</span>
        </p>
        <p className="mt-2 text-sm text-neutral-400">ou R$ 397 à vista • garantia de 7 dias</p>
        <span className="mt-6 inline-block rounded-full bg-fuchsia-500 px-8 py-3 text-sm font-bold">
          Quero transformar meu corpo
        </span>
      </section>

      <footer className="px-8 py-8 text-center text-xs text-neutral-400">
        © Método Vitta — conteúdo de demonstração
      </footer>
    </div>
  );
}
