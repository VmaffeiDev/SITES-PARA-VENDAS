const steps = [
  {
    number: "01",
    title: "Escolha o site ideal",
    description: "Navegue pelo catálogo e escolha o modelo que combina com o seu negócio.",
  },
  {
    number: "02",
    title: "Personalize com sua marca",
    description: "Envie suas cores, textos, logo e fotos. Nosso time adapta tudo para você.",
  },
  {
    number: "03",
    title: "Receba pronto para vender",
    description: "Seu site vai ao ar com domínio e hospedagem configurados, pronto para atrair clientes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-neutral-400">
            Três passos simples entre você e o seu novo site no ar.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="text-sm font-bold text-fuchsia-400">{step.number}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
