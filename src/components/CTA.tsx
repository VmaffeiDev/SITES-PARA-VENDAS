export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.25),transparent_55%)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pronto para ter seu site no ar?
        </h2>
        <p className="max-w-xl text-neutral-400">
          Fale com a gente agora e comece a personalizar o seu site ainda hoje.
        </p>
        <a
          href="#planos"
          className="rounded-full bg-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400"
        >
          Quero meu site agora
        </a>
      </div>
    </section>
  );
}
