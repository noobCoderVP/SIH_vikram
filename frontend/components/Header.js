import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import logo from "../public/logo.jpeg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Image from "next/image";

const Header = props => {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [logged, setLogged] = useState(false);
    const [type, setType] = useState("");

    useEffect(() => {
        if (localStorage.getItem("logged")) setLogged(true);
        setType(localStorage.getItem("type"));
    }, []);

    return (
        <header className="py-4 sticky top-0 z-10 bg-stone-50 border-b-2 border-gray-400">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <Image src={logo} width={30} height={30}></Image>
                    <div className="text-blue-800 text-2xl font-semibold mr-auto ml-4">
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
                        {!(type == "lawyer") && (
                            <li>
                                <Link
                                    href="/lawyers"
                                    className="text-black hover:underline">
                                    Lawyers
                                </Link>
                            </li>
                        )}
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
                            {logged ? <LogoutButton /> : <LoginButton />}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;
