// Card.js
import React from "react";
import { Rating } from "flowbite-react";
import LawyerTag from "./LawyerTag";
import Link from "next/link";

const LawyerCard = ({
    imageUrl,
    name,
    username,
    rating,
    experience,
    renderButton = true,
    tier,
    tags,
}) => {
    const location = "Mumbai, Maharashtra";
    const renderStars = rating => {
        const starIcons = [];
        for (let i = 0; i < parseInt(rating); i++) {
            starIcons.push(<Rating.Star />);
        }
        for (let i = 0; i < 5 - parseInt(rating); i++) {
            starIcons.push(<Rating.Star className="text-gray-300" />);
        }
        return starIcons;
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-2 shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="h-28 w-28 object-cover object-center rounded-full"
                    />
                </div>
                <div className="col-span-3 ml-4">
                    <div className="font-bold text-black text-xl mb-2">
                        {name}
                    </div>
                    <p className="text-gray-700 text-base">{location}</p>
                    <p className="text-gray-700 text-base">
                        {experience + " years of experience"}
                    </p>
                    <div className="grid grid-cols-4">
                        <Rating className="">{renderStars(rating)}</Rating>
                        <p className="ml-2 mb-1 text-gray-700 text-sm">
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div class="bg-gray-300 h-px w-full"></div>
            <div className="flex flex-wrap px-4 py-4">
                <p className="text-black text-xl mr-2 font-semibold">Tags: </p>
                {tags.map(e => {
                    return <LawyerTag text={e} color="blue" />;
                })}
            </div>
            <div class="bg-gray-300 h-px w-full"></div>
            <div className="bg-gray-100 p-4 border-t border-gray-300">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-600 text-sm font-semibold">
                            Avg Rate
                        </p>
                        <p className="text-2xl text-indigo-600">10</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-semibold">
                            Price Tier
                        </p>
                        <p className="text-2xl text-indigo-600">{tier}</p>
                    </div>
                    {renderButton ? (
                        <div>
                            <Link
                                className="bg-indigo-600 text-white py-2 px-2 rounded-lg hover:bg-indigo-700"
                                href={`/lawyer/profile/${username}`}>
                                Go to Lawyer's Page
                            </Link>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;
