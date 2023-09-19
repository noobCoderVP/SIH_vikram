import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
    <Link
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 rounded-full transition duration-300"
      href="/login"
    >
      Log In
    </Link>
      
    </div>
  );
};

export default LoginButton;