const testimonials = [
  {
    quote:
      "Em uma semana meu site estava no ar e já recebi meus primeiros pedidos pela loja virtual.",
    name: "Camila Rocha",
    role: "Loja Camila Acessórios",
  },
  {
    quote:
      "Processo simples do início ao fim. Só enviei as fotos e textos e o resto foi resolvido pela equipe.",
    name: "Diego Almeida",
    role: "Restaurante Sabor & Cia",
  },
  {
    quote:
      "O site institucional ficou com muito mais cara profissional do que eu imaginava pelo preço.",
    name: "Fernanda Souza",
    role: "Consultoria FS Advocacia",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-900/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quem comprou, recomenda
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-300">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-neutral-500">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
