// Card.js
import React from "react";
import { Rating } from "flowbite-react";
import { Button } from "@mui/material";
import LawyerTag from "./LawyerTag";
import Link from "next/link";

const LawyerCard = lawyer => {
    const {
        name,
        type_of_service_tag: typeOfServiceTag,
        specialization_tags: specializationTags,
        tier,
        rating,
        about: description,
        experience,
        verified,
        username,
    } = lawyer;
    const location = "Mumbai, Maharashtra";
    const imageUrl =
        "https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"; // default for now
    const renderButton = true;

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
                    <div className="flex items-center">
                        <div className="font-bold text-black text-xl mb-2">
                            {name}
                        </div>
                        {verified && (
                            <span className="ml-2 text-green-700">✅</span>
                        )}
                    </div>
                    <p className="text-gray-700 text-base">{location}</p>
                    <p className="text-gray-700 text-base">
                        {experience + " years of experience"}
                    </p>
                    {description && (
                        <p className="text-gray-700 text-base mt-2">
                            {description}
                        </p>
                    )}
                    <div className="grid grid-cols-4">
                        <Rating className="">{renderStars(rating)}</Rating>
                    </div>
                </div>
            </div>
            <br />
            <div className="bg-gray-300 h-px w-full"></div>
            <div className="flex flex-wrap px-4 py-4">
                {typeOfServiceTag && (
                    <LawyerTag text={typeOfServiceTag} color="green" />
                )}
                {specializationTags &&
                    specializationTags.length > 0 &&
                    specializationTags.map((tag, index) => (
                        <LawyerTag key={index} text={tag} color="blue" />
                    ))}
            </div>

            <div className="bg-gray-300 h-px w-full"></div>
            <div className="bg-gray-100 p-4 border-t border-gray-300">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-600 text-sm font-semibold">
                            Avg Rating
                        </p>
                        <p className="text-2xl text-indigo-600">{rating}</p>
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
                                className="text-black hover:text-white"
                                href={`/lawyer/profile/${username}`}>
                                <Button
                                    className="text-black hover:text-white"
                                    variant="contained"
                                    color="secondary">
                                    Go To Lawyer's Profile
                                </Button>
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
