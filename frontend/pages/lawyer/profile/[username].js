import { Inter } from "next/font/google";
import LawyerProfile from "@/components/LawyerProfile";
import { io } from "socket.io-client";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CircularIndeterminate from "@/components/Loader";

export default function Profile({ featuredProduct, newProducts }) {
    const router = useRouter();
    const [lawyer, setDetails] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchDetails = async username => {
        try {
            const response = await axios.get(
                `http://localhost:5000/lawyer/profile/${username}`,
            );
            if (response.data.status) {
                setDetails(response.data.data);
                setLoaded(true);
            } else {
                router.push("/error");
            }
        } catch (error) {
            toast("Internal Server Error");
        }
    };

    useEffect(() => {
        if (router.query.username) {
            const username = router.query.username;
            try {
                fetchDetails(username);
            } catch (error) {}
        }
    }, [router]);

    if (!loaded) return <CircularIndeterminate />;
    return (
        <div>
            <Header />
            <Head>
                <title>Profile</title>
            </Head>
            <ToastContainer theme="dark" />
            {lawyer && <LawyerProfile io={io} details={lawyer} />}
        </div>
    );
}
