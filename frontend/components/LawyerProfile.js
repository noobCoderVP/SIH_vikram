// LawyerProfile.js
import React from "react";
import LawyerCard from "./LawyerCard"; // You can reuse your Card component
import FeedbackCarousel from "./FeedbackCarousel";
import FeedbackCard from "./FeedbackCard";
import { Rating } from "flowbite-react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ChatButton from "./ChatButton";
import Link from "next/link";

const LawyerProfile = props => {
    const { name, about, experience, rating, tags, tier, username } =
        props.details;
    console.log(tags);

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
          successUrl: `http://localhost:3000/profile`,
          cancelUrl: `http://localhost:3000/`,
          customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
      }

    const feedbackData = {
        name: "John Doe",
        rating: 4, // You can set the rating from 0 to 5
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: "", // Provide the URL to the person's image
    };
    return (
        <div className="bg-white">
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Left Column */}
                    <div className="text-black lg:w-2/3 pr-4">
                        <h1 className="text-3xl font-semibold mb-4">{name}</h1>
                        <p className="mb-4">{about}</p>
                        <div className="flex flex-row">
                            <p className="text-xl text-black font-semibold mr-4">
                                {" "}
                                Talk to Me:{" "}
                            </p>
                            <ChatButton username={username} io={props.io} />
                            <p className="text-xl text-black font-semibold ml-4 mr-4">
                                {" "}
                                Checkout:{" "}
                            </p>
                            <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                Checkout
                            </button>
                        </div>
                        {/* <div className="mt-4 mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Specialistions
                            </h2>
                            <p className="mb-4">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various ve
                            </p>
                        </div> */}
                        {/* Feedback Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Feedback
                            </h2>
                            {/* Map through feedback data and display feedback cards */}
                            {/* FeedbackCard component can be used here */}
                            <div className="">
                                <Rating.Advanced
                                    className="mb-2"
                                    percentFilled={70}>
                                    <p>5 star</p>
                                </Rating.Advanced>
                                <Rating.Advanced
                                    className="mb-2"
                                    percentFilled={17}>
                                    <p>4 star</p>
                                </Rating.Advanced>
                                <Rating.Advanced
                                    className="mb-2"
                                    percentFilled={8}>
                                    <p>3 star</p>
                                </Rating.Advanced>
                                <Rating.Advanced
                                    className="mb-2"
                                    percentFilled={4}>
                                    <p>2 star</p>
                                </Rating.Advanced>
                                <Rating.Advanced percentFilled={1}>
                                    1 star
                                </Rating.Advanced>
                            </div>
                        </div>

                        <div>
                            {/* Submit Feedback */}
                            <h2 className="text-xl font-semibold mb-4">
                                Submit Feedback
                            </h2>
                            <form className="flex flex-col">
                                <input className="mb-2" type="number" placeholder="Please enter a rating between 1 and 5"></input>
                                <textarea
                                    className="border-2 border-gray-300 p-2 mb-4"
                                    placeholder="Write your feedback here"
                                />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3">
                        <LawyerCard
                            lawyer={props.details} // Pass the lawyer data as a prop
                            renderButton={false} // Set renderButton as needed, either true or false
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerProfile;
