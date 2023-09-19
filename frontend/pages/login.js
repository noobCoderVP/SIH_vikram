// LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [registrationData, setRegistrationData] = useState({
        username: "",
        name: "",
        password: "",
        email: "",
    });
    const router = useRouter();

    const handleTabClick = tab => {
        setActiveTab(tab);
    };

    const handleLoginSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/user/login",
                loginData,
            );
            if (response.data.status) {
                toast(response.data.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("username", loginData.username);
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                toast(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
        console.log("Logging in with:", loginData);
    };

    const handleRegistrationSubmit = async e => {
        e.preventDefault();
        // Implement your registration logic here using registrationData
        try {
            const response = await axios.post(
                "http://localhost:5000/user/register",
                registrationData,
            );
            console.log(response);
            if (response.data.status) {
                toast(response.data.message);
                handleTabClick("login");
            } else {
                toast(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
        console.log("Registering with:", registrationData);
    };

    return (
        <div>
            <Head>
                <title>Get Started</title>
            </Head>
            <ToastContainer />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <ul className="flex border-b">
                            <li
                                className={`mr-1 cursor-pointer ${
                                    activeTab === "login"
                                        ? "border-indigo-500 text-indigo-600"
                                        : "border-gray-300"
                                }`}
                                onClick={() => handleTabClick("login")}>
                                <button
                                    className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold ${
                                        activeTab === "login"
                                            ? "bg-white"
                                            : "bg-gray-100"
                                    }`}>
                                    Login
                                </button>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    activeTab === "register"
                                        ? "border-indigo-500 text-indigo-600"
                                        : "border-gray-300"
                                }`}
                                onClick={() => handleTabClick("register")}>
                                <button
                                    className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold ${
                                        activeTab === "register"
                                            ? "bg-white"
                                            : "bg-gray-100"
                                    }`}>
                                    Register
                                </button>
                            </li>
                        </ul>
                    </div>

                    {activeTab === "login" && (
                        <form
                            onSubmit={handleLoginSubmit}
                            className="text-black">
                            <h2 className="text-black text-2xl font-semibold mb-4">
                                Login
                            </h2>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    minLength={5}
                                    placeholder="Username"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={loginData.username}
                                    onChange={e =>
                                        setLoginData({
                                            ...loginData,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={loginData.password}
                                    onChange={e =>
                                        setLoginData({
                                            ...loginData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-4 text-blue-600 text-right">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">
                                    Login
                                </button>
                            </div>
                        </form>
                    )}

                    {activeTab === "register" && (
                        <form onSubmit={handleRegistrationSubmit}>
                            <h2 className=" text-black text-2xl font-semibold mb-4">
                                Register
                            </h2>
                            <div className="text-black mb-4">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={registrationData.username}
                                    onChange={e =>
                                        setRegistrationData({
                                            ...registrationData,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="text-black mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={registrationData.name}
                                    onChange={e =>
                                        setRegistrationData({
                                            ...registrationData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="text-black mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={registrationData.password}
                                    onChange={e =>
                                        setRegistrationData({
                                            ...registrationData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="text-black mb-4">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={registrationData.email}
                                    onChange={e =>
                                        setRegistrationData({
                                            ...registrationData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="text-black mb-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={registrationData.number}
                                    onChange={e =>
                                        setRegistrationData({
                                            ...registrationData,
                                            number: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">
                                    Register
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
