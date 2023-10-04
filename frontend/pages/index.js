import AIQueryBox from "@/components/AIQueryBox";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import Header from "@/components/Header";
import LawyerRegistration from "@/components/LawyerRegistration";
import LetterByLetterCard from "@/components/LetterByLetterCard";
import CircularIndeterminate from "@/components/Loader";
import PortalToLegalButton from "@/components/PortalToLegalButton";
import ServicesSection from "@/components/ServicesSection";
import Head from "next/head";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

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
