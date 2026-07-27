export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,rgba(217,70,239,0.35),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(251,146,60,0.25),transparent_45%)]"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-16 text-center md:pt-24">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-neutral-300">
          + de 300 sites entregues para pequenos negócios
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Seu site profissional, pronto e no ar em <span className="text-fuchsia-400">poucos dias</span>
        </h1>
        <p className="max-w-xl text-balance text-lg text-neutral-400">
          Escolha um modelo pronto, personalize com sua marca e comece a vender online sem esperar meses por um desenvolvimento do zero.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#catalogo"
            className="rounded-full bg-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400"
          >
            Ver sites disponíveis
          </a>
          <a
            href="#planos"
            className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver planos e preços
          </a>
        </div>
        <dl className="grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10 text-white">
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">5 dias</dt>
            <dd className="text-sm text-neutral-400">tempo médio de entrega</dd>
          </div>
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">100%</dt>
            <dd className="text-sm text-neutral-400">responsivo e otimizado</dd>
          </div>
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">4.9/5</dt>
            <dd className="text-sm text-neutral-400">satisfação dos clientes</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
