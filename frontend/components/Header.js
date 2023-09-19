import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [logged, setLogged] = useState(true);

    useEffect(() => {
        console.log("Hello");
        alert("hello");
    }, []);

    return (
        <header className="bg-white py-4">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-black text-2xl font-semibold">
                        NyayBazaar
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                href="/lawyers"
                                className="text-black hover:underline">
                                Lawyers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/property"
                                className="text-black hover:underline">
                                Property
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/startup"
                                className="text-black hover:underline">
                                Startup
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/documents"
                                className="text-black hover:underline">
                                Documents
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
