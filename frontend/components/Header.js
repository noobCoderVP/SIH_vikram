import Link from "next/link";
import {useContext, useState} from "react";
import LoginButton from "./LoginButton";

export default function Header() {
  const [mobileNavActive,setMobileNavActive] = useState(false);
  const tempLen = 0;
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-black text-2xl font-semibold"> 
            NyayBazaar
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/lawyers" className="text-black">Lawyers</Link>
            </li>
            <li>
              <Link href="/property" className="text-black">Property</Link>
            </li>
            <li>
              <Link href="/startup" className="text-black">Startup</Link>
            </li>
            <li>
              <Link href="/documents" className="text-black">Documents</Link>
            </li>
            <li className="">
               <LoginButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

