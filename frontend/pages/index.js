
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import FeedbackCarousel from '@/components/FeedbackCarousel';
import ServicesSection from '@/components/ServicesSection';
import HomeFAQ from '@/components/HomeFAQ';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBox />
      {/* Area for the Lawyer Cards or Results to Pop Up */}
      <ServicesSection />
      <FeedbackCarousel />
      {/* <HomeFAQ /> */}
      <Footer />
    </div>
  )
}
