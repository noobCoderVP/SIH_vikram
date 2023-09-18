
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import FeedbackCarousel from '@/components/FeedbackCarousel';
import ServicesSection from '@/components/ServicesSection';
import FaqSection from '@/components/FaqSection';
import AIResults from '@/components/AIResults';
import LetterByLetterCard from '@/components/LetterByLetterCard';
import TagSection from '@/components/TagSection';
import { useState } from 'react';

export default function HomePage() {
  const [searched, setSearched] = useState(false);
  const updateSearched = (newValue) => {
    setSearched(newValue);
  };

  const chipData = [
    'Chip 1',
    'Chip 2',
    'Chip 3',
    'Chip 4',
    'Chip 5',
    'Chip 6',
    // Add more chip labels as needed
  ];

  return (
    <div>
      <Header />
      <SearchBox updateSearched={updateSearched}/>
      {/* Area for the Lawyer Cards or Results to Pop Up */}

      {
        searched ? (
          <div className="grid grid-cols-6 bg-gray-100 ">
            <AIResults/>
            <div className='col-span-2 mt-6 p-4 bg-gray-100'>
              <LetterByLetterCard text="Our lawyers are the best when it comes to acquiring properties. We have a team of lawyers who are experts in property law and can help you with any property related issues."/>
              <TagSection chipData={chipData}/>
            </div>
          </div>
        ) : 
        (<div></div>)
      }

      <ServicesSection />
      <FeedbackCarousel />
      <FaqSection />
      <Footer />
    </div>
  )
}