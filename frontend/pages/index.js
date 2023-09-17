
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

export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}