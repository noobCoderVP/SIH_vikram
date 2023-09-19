import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

const LoginButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [logged, setLogged] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!localStorage.getItem("logged")) setLogged(false);
    }, []);

    return (
        <div>
            <Link
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full transition duration-300"
                href="/login">
                Get Started
            </Link>
        </div>
    );
};

export default LoginButton;
