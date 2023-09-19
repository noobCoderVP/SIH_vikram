
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import LawyerProfile from '@/components/LawyerProfile';


export default function Profile({featuredProduct,newProducts}) {
  return (
    <div>
      <Header />
      <LawyerProfile />
      <Footer />
    </div>
  )
}