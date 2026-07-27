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
