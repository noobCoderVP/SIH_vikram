'use client';
import React from "react";
import FeedbackCard from "./FeedbackCard";
import { Carousel } from 'flowbite-react';

const FeedbackCarousel = () => {
    const feedbackData = {
        name: 'John Doe',
        rating: 4, // You can set the rating from 0 to 5
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '', // Provide the URL to the person's image
    };
    return (
        <>
            <div className="w-full mx-auto text-center py-6 bg-slate-100">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
                    Our Rave Reviews
                </h1>
            </div>
            <div className="flex h-80">
                <Carousel className="bg-slate-100">
                    <div className="flex justify-center items-center">
                        <FeedbackCard {...feedbackData}></FeedbackCard>
                    </div>
                    <div className="flex justify-center items-center">
                        <FeedbackCard {...feedbackData}></FeedbackCard>
                    </div>

                    <div className="flex justify-center items-center">
                        <FeedbackCard {...feedbackData}></FeedbackCard>
                    </div>

                    <div className="flex justify-center items-center">
                        <FeedbackCard {...feedbackData}></FeedbackCard>
                    </div>

                </Carousel>
            </div>
        </>
    );
};

export default FeedbackCarousel;
