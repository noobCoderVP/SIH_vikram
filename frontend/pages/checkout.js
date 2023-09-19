import Header from "@/components/Header";
import Footer from '@/components/Footer';
import LawyerProfile from '@/components/LawyerProfile';
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const OrderSummary = () => {

  return(
    <div>
      <h1 class="mb-5 font-semibold text-2xl font-sans text-indigo-600">Order Summary</h1>
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

export default function Checkout({featuredProduct,newProducts}) {
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });
    return (
      <div className="bg-gray-200 h-screen w-screen">
        <Header />
        <div class="mx-auto w-9/12 m-10">
          <h1 class="ml-5 mb-5 font-semibold text-3xl font-sans text-indigo-600">NyayBazaar</h1>
          <div class="content-center flex flex-row">
            <div class="rounded-l-xl bg-white basis-1/2 p-10">
              <OrderSummary />
            </div>
            <div class="rounded-r-xl bg-blue-200 basis-1/2 p-10">
              {clientSecretSettings.loading ? (
                <h1 class="font-semibold text-3xl font-sans">Loading ...</h1>
              ) : (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret: clientSecretSettings.clientSecret,
                    appearance: { theme: "stripe" },
                  }}
                >
                  <CheckoutForm />
                </Elements>
              )}
            </div>
          </div>
        </div>
        </div>
      );
}
  
  