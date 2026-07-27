import { plans } from "@/lib/sites";
import { currency } from "@/lib/currency";
import CheckoutButton from "@/components/CheckoutButton";

export default function Pricing() {
  return (
    <section id="planos" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Planos para todo tamanho de negócio
          </h2>
          <p className="mt-4 text-neutral-400">
            Preço fechado, sem surpresas. Escolha o plano que melhor atende sua fase atual.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-fuchsia-400/50 bg-fuchsia-500/[0.07] shadow-xl shadow-fuchsia-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
              <div className="mt-6 text-3xl font-bold text-white">
                {currency.format(plan.price)}
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-neutral-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 text-fuchsia-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CheckoutButton
                itemId={`plan:${plan.name.toLowerCase()}`}
                label={`Escolher ${plan.name}`}
                wrapperClassName="mt-8 flex flex-col items-stretch gap-2"
                messageClassName="text-center text-xs text-red-400"
                className={`w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 ${
                  plan.highlighted
                    ? "bg-fuchsia-500 text-white hover:bg-fuchsia-400"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
