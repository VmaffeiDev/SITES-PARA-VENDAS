import { siteTemplates } from "@/lib/sites";
import CheckoutButton from "@/components/CheckoutButton";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sites prontos para todo tipo de negócio
          </h2>
          <p className="mt-4 text-neutral-400">
            Cada modelo é personalizável: cores, textos, imagens e conteúdo se adaptam à sua marca antes da entrega.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteTemplates.map((site) => (
            <article
              key={site.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
            >
              <div className={`h-36 bg-gradient-to-br ${site.gradient}`} />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-fuchsia-400">
                    {site.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{site.name}</h3>
                </div>
                <p className="flex-1 text-sm text-neutral-400">{site.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-lg font-bold text-white">
                    {currency.format(site.price)}
                  </span>
                  <CheckoutButton
                    itemId={`site:${site.slug}`}
                    label="Quero este"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition group-hover:bg-fuchsia-400 group-hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
