import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { getCheckoutItem } from "@/lib/checkout";

export async function POST(request: NextRequest) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      {
        error:
          "Pagamento ainda não configurado. Defina MERCADOPAGO_ACCESS_TOKEN nas variáveis de ambiente.",
      },
      { status: 503 },
    );
  }

  const { itemId } = await request.json();
  const item = typeof itemId === "string" ? getCheckoutItem(itemId) : undefined;

  if (!item) {
    return NextResponse.json({ error: "Item inválido." }, { status: 400 });
  }

  const origin = request.nextUrl.origin;
  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);

  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: item.id,
            title: item.title,
            quantity: 1,
            unit_price: item.price,
            currency_id: "BRL",
          },
        ],
        back_urls: {
          success: `${origin}/checkout/sucesso`,
          failure: `${origin}/checkout/erro`,
          pending: `${origin}/checkout/pendente`,
        },
        auto_return: "approved",
        external_reference: item.id,
      },
    });

    return NextResponse.json({ url: result.init_point });
  } catch (error) {
    console.error("Falha ao criar preferência do Mercado Pago", error);
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento. Tente novamente em instantes." },
      { status: 502 },
    );
  }
}
