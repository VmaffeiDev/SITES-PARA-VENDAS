import CheckoutStatus from "@/components/CheckoutStatus";
import { getCheckoutItem } from "@/lib/checkout";

export default async function CheckoutErroPage({
  searchParams,
}: {
  searchParams: Promise<{ external_reference?: string }>;
}) {
  const { external_reference } = await searchParams;
  const item = external_reference ? getCheckoutItem(external_reference) : undefined;

  return (
    <CheckoutStatus
      tone="error"
      icon="✕"
      title="Não foi possível concluir o pagamento"
      description="O pagamento foi recusado ou cancelado. Você pode tentar novamente com outro método de pagamento."
      itemTitle={item?.title}
    />
  );
}
