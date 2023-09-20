import { Inter } from "next/font/google";
import LawyerProfile from "@/components/LawyerProfile";
import { io } from "socket.io-client";
import Head from "next/head";
import Header from "@/components/Header";

export default function Profile({ featuredProduct, newProducts }) {
    return (
        <div>
            <Header />
            <Head>
                <title>Profile</title>
            </Head>
        </div>
    );
}
