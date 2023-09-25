import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIQueryBox from "@/components/AIQueryBox";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import SearchResults from "@/components/SearchResults";
import LetterByLetterCard from "@/components/LetterByLetterCard";
import PortalToLegalButton from "@/components/PortalToLegalButton";
import TagSection from "@/components/TagSection";
import { useEffect, useState } from "react";
import LawyerRegistration from "@/components/LawyerRegistration";
import Head from "next/head";
import CircularIndeterminate from "@/components/Loader";

export default function HomePage() {
    const [searched, setSearched] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const updateSearched = newValue => {
        setSearched(newValue);
    };

    const [aiResponse, setAiResponse] = useState(
        // "Please give a well-framed query for the legal services you need to our AI and it will find you a solution and the best providers on our website for the same ! ",
        "",
    );
    // const updateSearched = newValue => {
    //     setSearched(newValue);
    // };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    const chipData = [
        "Chip 1",
        "Chip 2",
        "Chip 3",
        "Chip 4",
        "Chip 5",
        "Chip 6",
        // Add more chip labels as needed
    ];

    if (!loaded) return <CircularIndeterminate />;

    return (
        <>
            <Header />
            <div>
                <Head>
                    <title>NyayBazaar</title>
                </Head>
                <AIQueryBox
                    updateSearched={updateSearched}
                    setAiResponse={setAiResponse}
                />
                {/* Area for the Lawyer Cards or Results to Pop Up */}

                {searched ? (
                    <div className="bg-gray-100 ">
                        <LetterByLetterCard text={aiResponse} />
                        <PortalToLegalButton text={aiResponse} />
                        {/* <div className="col-span-2 mt-6 p-4 bg-gray-100">
                        <AIResults />
                        <TagSection chipData={chipData} />
                    </div> */}
                    </div>
                ) : (
                    <div></div>
                )}
                <ServicesSection />
                <FeedbackCarousel />
                <LawyerRegistration />
            </div>
        </>
    );
}
