import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LawyerProfile from "@/components/LawyerProfile";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Head from "next/head";

const OrderSummary = () => {
    return (
        <div>
            <h1 class="mb-5 font-semibold text-2xl font-sans text-indigo-600">
                Order Summary
            </h1>
            <ul class=" text-gray-600 font-light list-disc list-inside">
                <li>Llama food x 2</li>
                <li>Llama Bedding x 1</li>
                <li>Llama lamps x 3</li>
            </ul>
            <div class="mt-10 border-gray-300 border-t-2 pt-2 text-gray-600">
                Total: &euro; 10.00
            </div>
        </div>
    );
};

export default function Checkout({ featuredProduct, newProducts }) {
    let stripePromise;
    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        }
        return stripePromise;
    }

    async function handleCheckout() {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
              quantity: 1,
            },
          ],
          mode: 'payment',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/cancel`,
          customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
      }

    return (
        <div className="bg-gray-200 h-screen w-screen">
            <Header />
            <div class="mx-auto w-9/12 m-10">
                <h1 class="ml-5 mb-5 font-semibold text-3xl font-sans text-indigo-600">
                    NyayBazaar
                </h1>
                <div class="content-center flex flex-row">
                    <div class="rounded-l-xl bg-white basis-1/2 p-10">
                        <OrderSummary />
                    </div>
                    <button onClick={handleCheckout}> Stripe Checkout</button>
                    {/* <div class="rounded-r-xl bg-blue-200 basis-1/2 p-10">
                        {clientSecretSettings.loading ? (
                            <h1 class="font-semibold text-3xl font-sans">
                                Loading ...
                            </h1>
                        ) : (
                            null
                            // <Elements
                            //     stripe={stripePromise}
                            //     options={{
                            //         clientSecret:
                            //             clientSecretSettings.clientSecret,
                            //         appearance: { theme: "stripe" },
                            //     }}>
                            //     <CheckoutForm />
                            // </Elements>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
}
