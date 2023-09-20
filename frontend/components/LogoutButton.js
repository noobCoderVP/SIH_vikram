import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LogoutButton = () => {
    const router = useRouter();
    const openModal = () => {
        setIsOpen(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("logged");
        localStorage.removeItem("username");
        localStorage.removeItem("type");
        router.push("/");
        router.reload();
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div onClick={logoutHandler}>
            <Link
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full transition duration-300"
                href="/">
                Log Out
            </Link>
        </div>
    );
};

export default LogoutButton;
