import CheckoutStatus from "@/components/CheckoutStatus";
import { getCheckoutItem } from "@/lib/checkout";

export default async function CheckoutPendentePage({
  searchParams,
}: {
  searchParams: Promise<{ external_reference?: string }>;
}) {
  const { external_reference } = await searchParams;
  const item = external_reference ? getCheckoutItem(external_reference) : undefined;

  return (
    <CheckoutStatus
      tone="pending"
      icon="…"
      title="Pagamento em análise"
      description="Seu pagamento está sendo processado (comum em boleto e Pix). Avisaremos assim que for confirmado."
      itemTitle={item?.title}
    />
  );
}
