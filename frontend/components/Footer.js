import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Company
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">
                                    About
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Brand Center
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Help center
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Discord Server
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Download
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    iOS
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Android
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Windows
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <p className="text-center py-2 bg-blue-500 text-white">
                &copy; NyayBazaar Private Limited, Mumbai, India 2023.
            </p>
        </footer>
    );
};

export default Footer;
