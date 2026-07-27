import Link from "next/link";

type CheckoutStatusProps = {
  icon: string;
  title: string;
  description: string;
  itemTitle?: string;
  tone: "success" | "pending" | "error";
};

const toneStyles: Record<CheckoutStatusProps["tone"], string> = {
  success: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400",
  pending: "border-amber-400/40 bg-amber-500/10 text-amber-400",
  error: "border-red-400/40 bg-red-500/10 text-red-400",
};

export default function CheckoutStatus({
  icon,
  title,
  description,
  itemTitle,
  tone,
}: CheckoutStatusProps) {
  return (
    <main className="flex min-h-[70vh] flex-1 items-center justify-center bg-neutral-950 px-6 py-24">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-full border text-3xl ${toneStyles[tone]}`}
        >
          {icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-neutral-400">{description}</p>
          {itemTitle && (
            <p className="mt-4 text-sm text-neutral-500">
              Referente a: <span className="text-neutral-300">{itemTitle}</span>
            </p>
          )}
        </div>
        <Link
          href="/"
          className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
        >
          Voltar para o site
        </Link>
      </div>
    </main>
  );
}
