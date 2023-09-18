import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import AIResults from "@/components/AIResults";
import { useState } from "react";

export default function HomePage() {
    const [searched, setSearched] = useState(false);
    const updateSearched = newValue => {
        setSearched(newValue);
    };
    return (
        <div>
            <Header />
            <SearchBox updateSearched={updateSearched} />
            {/* Area for the Lawyer Cards or Results to Pop Up */}
            {searched ? <AIResults /> : <div></div>}
            <ServicesSection />
            <FeedbackCarousel />
            <FaqSection />
            <Footer />
        </div>
    );
}
