import React from 'react';
import LawyerPersonalProfile from '@/components/LawyerPersonalProfile';
import "react-chat-elements/dist/main.css"
import CaseTable from '@/components/CaseTable';
import Header from '@/components/Header';
import { Footer } from 'flowbite-react';
import Link from 'next/link';
import UserPersonalProfile from '@/components/UserPersonalProfile';
import LoginButton from '@/components/LoginButton';
import Head from 'next/head';

export default function ProfilePage() {
    const lawyer = true;
    const logged = true;
    return (
        <>
            {
                logged ? lawyer ? <LawyerPersonalProfile /> : <UserPersonalProfile /> :
                    <>
                    <Header />
                    <div className='fixed inset-0 bg-gray-300 flex flex-col justify-center items-center'>
                        <p className='text-black text-xl font-semibold mb-4'>Please Login to Continue to your Profile</p>
                        <LoginButton/>
                    </div>
                    </>
            }
            <Footer />
        </>
    );
}