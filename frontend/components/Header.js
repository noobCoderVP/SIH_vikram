import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import logo from "../public/logo.jpeg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Image from "next/image";

export default function Header() {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [logged, setLogged] = useState(true);

    useEffect(() => {
        console.log("Hello");
        alert("hello");
    }, []);

    return (
        <header className="py-4 sticky top-0 z-10 bg-blue-100 border-b-2 border-gray-400">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="text-blue-800 text-2xl font-semibold">
                        NyayBazaar
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                href="/"
                                className="text-black hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/lawyers"
                                className="text-black hover:underline">
                                Lawyers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                className="text-black hover:underline">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cases"
                                className="text-black hover:underline">
                                Cases
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/help"
                                className="text-black hover:underline">
                                Help
                            </Link>
                        </li>
                        <li className="">
                            {/* {logged ? <LogoutButton /> : <LoginButton />} */}
                            <LoginButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
