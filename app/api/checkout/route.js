import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

export async function POST(request) {
  try {
    // Read body
    const body = await request.json();
    const { totalItems } = body;

    // Determine origin: deployed URL or local fallback
    const origin =
      process.env.NEXT_PUBLIC_BASE_URL ||
      request.headers.get("origin") ||
      "http://localhost:3000";

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: totalItems,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    });

    return new Response(JSON.stringify(session), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return new Response(JSON.stringify({ error: "Failed to create checkout" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
