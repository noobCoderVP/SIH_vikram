import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import Link from "next/link";

function cases() {
    const [type, setType] = useState("");
    useEffect(() => {
        setType(localStorage.getItem("type"));
    }, []);
    return (
        <>
            <Header />
            <div className="bg-white p-4">
                {type == "lawyer" && (
                    <section className="bg-white text-black p-4 flex gap-10 border-2 border-black w-max">
                        <h1 className="text-2xl">
                            Register a new case with a client
                        </h1>
                        <Link href="/cases/register">
                            <Button
                                variant="contained"
                                color="primary"
                                className="text-blue-700 hover:text-white">
                                New Case
                            </Button>
                        </Link>
                    </section>
                )}
                <section className="bg-white text-black p-4  w-max">
                    <h1 className="text-xl">Ongoing cases</h1>
                </section>
                <section className="bg-white text-black p-4  w-max">
                    <h1 className="text-xl">Past cases</h1>
                </section>
            </div>
        </>
    );
}

export default cases;
