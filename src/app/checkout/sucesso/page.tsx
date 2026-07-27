import CheckoutStatus from "@/components/CheckoutStatus";
import { getCheckoutItem } from "@/lib/checkout";

export default async function CheckoutSucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ external_reference?: string }>;
}) {
  const { external_reference } = await searchParams;
  const item = external_reference ? getCheckoutItem(external_reference) : undefined;

  return (
    <CheckoutStatus
      tone="success"
      icon="✓"
      title="Pagamento aprovado!"
      description="Recebemos sua compra. Nossa equipe vai entrar em contato para começar a personalização do seu site."
      itemTitle={item?.title}
    />
  );
}
