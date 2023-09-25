import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "@/components/Loader";

export default function NotFoundPage() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) {
        return <CircularIndeterminate />;
    }
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <Header />
            <div className="h-screen flex flex-col justify-center items-center text-black bg-gray-100">
                <h1 className="text-4xl font-semibold mb-4">
                    404 - Page Not Found
                </h1>
                <p className="text-lg mb-8">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link href="/" className="text-blue-500 hover:underline">
                    Go to Homepage
                </Link>
            </div>
            <Footer />
        </>
    );
}
