import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature")!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET! as string;

  let event: Stripe.Event;

  try {
    const payload = await request.text();
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.log("Falha ao autenticar a assinatura", err);
    return new NextResponse(`Webhook error`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      const paymentIntentId = session.payment_intent as string;

      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
      console.log("Payment intent", paymentIntent)


      const donorName = paymentIntent.metadata.donorName
      const donorMessage = paymentIntent.metadata.donorMessage
      const donationId = paymentIntent.metadata.donationId

      try{
        const updatedDonation = await prisma.donation.update({
          where: {
            id: donationId
          },
          data: {
            status: "PAID",
          }
        })

        console.log("Doação atualizada", updatedDonation)
      }catch(err){
        console.log("Falha ao atualizar a doação", err)
        return new NextResponse(`Webhook error`, { status: 400 });
      }
      break

      default:
        console.log(`Evento não tratado: ${event.type}`)
  }

  return NextResponse.json({ok: true});
}
