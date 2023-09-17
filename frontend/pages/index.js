
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import FeedbackCarousel from '@/components/FeedbackCarousel';
import ServicesSection from '@/components/ServicesSection';
import FaqSection from '@/components/FaqSection';


export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header />
      <SearchBox />
      {/* Area for the Lawyer Cards or Results to Pop Up */}
      <ServicesSection />
      <FeedbackCarousel />
      <FaqSection />
      <Footer />
    </div>
  )
}