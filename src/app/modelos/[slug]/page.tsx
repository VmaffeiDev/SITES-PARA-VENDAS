import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { siteTemplates } from "@/lib/sites";
import { currency } from "@/lib/currency";
import { previewsBySlug } from "@/components/previews";
import BrowserFrame from "@/components/previews/BrowserFrame";
import CheckoutButton from "@/components/CheckoutButton";

export function generateStaticParams() {
  return siteTemplates.map((site) => ({ slug: site.slug }));
}

export default async function ModeloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = siteTemplates.find((item) => item.slug === slug);
  const Preview = previewsBySlug[slug];

  if (!site || !Preview) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <Link
          href="/#catalogo"
          transitionTypes={["nav-back"]}
          className="text-sm text-neutral-400 transition hover:text-white"
        >
          ← Voltar ao catálogo
        </Link>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-fuchsia-400">
              {site.category}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-white">{site.name}</h1>
            <p className="mt-2 max-w-xl text-neutral-400">{site.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-white">{currency.format(site.price)}</span>
            <CheckoutButton
              itemId={`site:${site.slug}`}
              label="Quero este"
              className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-6">
        <ViewTransition name={`site-preview-${site.slug}`}>
          <BrowserFrame domain={site.domain}>
            <Preview />
          </BrowserFrame>
        </ViewTransition>
        <p className="mt-4 text-center text-xs text-neutral-500">
          Esta é uma prévia de demonstração — cores, textos e imagens são personalizados para o seu negócio antes da entrega.
        </p>
      </div>
    </main>
  );
}
