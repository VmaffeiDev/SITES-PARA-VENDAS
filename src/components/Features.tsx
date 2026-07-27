const features = [
  {
    title: "Entrega rápida",
    description: "Sites prontos que precisam só de personalização, no ar em dias, não meses.",
    icon: "⚡",
  },
  {
    title: "Design responsivo",
    description: "Perfeito em celular, tablet e desktop, sem esforço extra da sua parte.",
    icon: "📱",
  },
  {
    title: "Otimizado para SEO",
    description: "Estrutura pensada para ajudar seu negócio a ser encontrado no Google.",
    icon: "🔍",
  },
  {
    title: "Suporte real",
    description: "Time disponível para ajudar na personalização e em dúvidas depois da entrega.",
    icon: "💬",
  },
];

export default function Features() {
  return (
    <section className="bg-neutral-900/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-2xl md:mx-0">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
