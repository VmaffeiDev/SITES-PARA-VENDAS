import { plans, siteTemplates } from "@/lib/sites";

export type CheckoutItem = {
  id: string;
  title: string;
  price: number;
};

const checkoutItems: CheckoutItem[] = [
  ...siteTemplates.map((site) => ({
    id: `site:${site.slug}`,
    title: site.name,
    price: site.price,
  })),
  ...plans.map((plan) => ({
    id: `plan:${plan.name.toLowerCase()}`,
    title: `Plano ${plan.name}`,
    price: plan.price,
  })),
];

export function getCheckoutItem(id: string): CheckoutItem | undefined {
  return checkoutItems.find((item) => item.id === id);
}
