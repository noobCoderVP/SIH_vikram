import { Inter } from "next/font/google";
import LawyerProfile from "@/components/LawyerProfile";
import { io } from "socket.io-client";
import Head from "next/head";

export default function Profile({ featuredProduct, newProducts }) {
    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>
            <LawyerProfile />
        </div>
    );
}
