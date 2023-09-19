import React from 'react';
import UserProfile from '@/components/UserProfile';
import "react-chat-elements/dist/main.css"
import Header from '@/components/Header';
import { Footer } from 'flowbite-react';

export default function UserProfilePage() {
    return (
        <>
            <UserProfile />
            <Footer />
        </>
    );
}