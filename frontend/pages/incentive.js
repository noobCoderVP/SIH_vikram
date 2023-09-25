import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Accordion } from "flowbite-react";
import CircularIndeterminate from "@/components/Loader";

function incentive() {
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
                <title>Incentives</title>
            </Head>
            <Header />
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-black text-center font-semibold mb-8 underline">
                        Your Incentives
                    </h2>

                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title className="text-red-700">
                                5% extra extra pay on each case
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You have been an asset for a client, you
                                    will get 5% extra on each case from a client
                                    (applied on low value of tier)
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="text-red-700">
                                Increased Attention
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Since you have got amazing rating, you will
                                    get chance to serve our clients very
                                    frequently
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

export default incentive;
