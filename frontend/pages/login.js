// LoginPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Header from "@/components/Header";
import { Form, Input } from "antd";
import CircularIndeterminate from "@/components/Loader";

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [loaded, setLoaded] = useState(false);
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
        // e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/user/login",
                loginData,
            );
            if (response.data.status) {
                toast(response.data.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("username", loginData.username);
                localStorage.setItem("type", "client");
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
        // commented e.prevent_default
        // e.preventDefault();
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
    };

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) {
        return <CircularIndeterminate />;
    }
    return (
        <div>
            <Head>
                <title>Get Started</title>
            </Head>
            <Header />
            <ToastContainer />
            <div className="min-h-screen  flex items-center justify-center bg-gray-100">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
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

                    {/* Login Page */}
                    {activeTab === "login" && (
                        <Form
                            name="basic"
                            className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-6"
                            initialValues={{ remember: true }}
                            onFinish={handleLoginSubmit}
                            autoComplete="off">
                            <div className="border-b-2 pb-3 flex justify-between items-center">
                                <h1 className="text-lg font-semibold text-gray-500">
                                    Login
                                </h1>
                            </div>

                            <div className="mb-4 mt-4">
                                <label
                                    htmlFor="username"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Username
                                </label>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}>
                                    <Input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font"
                                        placeholder="Username"
                                        autoFocus
                                        value={loginData.username}
                                        onChange={e =>
                                            setLoginData({
                                                ...loginData,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="-mt-2">
                                <label
                                    htmlFor="password"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Password
                                </label>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}>
                                    <Input.Password
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font focus:ring-2 focus:ring-blue-500"
                                        placeholder="Password"
                                        value={loginData.password}
                                        onChange={e =>
                                            setLoginData({
                                                ...loginData,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="flex justify-end">
                                <Form.Item className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg">
                                        Login
                                    </button>
                                </Form.Item>
                            </div>
                        </Form>
                    )}

                    {activeTab === "register" && (
                        <Form
                            name="basic"
                            className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-6"
                            onFinish={handleRegistrationSubmit}
                            autoComplete="off">
                            <div className="border-b-2 pb-3 flex justify-between items-center">
                                <h1 className="text-lg font-semibold text-gray-500">
                                    Register
                                </h1>
                            </div>

                            <div className="mb-4 mt-2">
                                <label
                                    htmlFor="username"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Username
                                </label>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}>
                                    <Input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font"
                                        placeholder="Username"
                                        value={registrationData.username}
                                        onChange={e =>
                                            setRegistrationData({
                                                ...registrationData,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="-mt-4">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Name
                                </label>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your name!",
                                        },
                                    ]}>
                                    <Input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font"
                                        placeholder="Name"
                                        value={registrationData.name}
                                        onChange={e =>
                                            setRegistrationData({
                                                ...registrationData,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="-mt-4">
                                <label
                                    htmlFor="password"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Password
                                </label>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}>
                                    <Input.Password
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font focus:ring-2 focus:ring-blue-500"
                                        placeholder="Password"
                                        value={registrationData.password}
                                        onChange={e =>
                                            setRegistrationData({
                                                ...registrationData,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="-mt-4">
                                <label
                                    htmlFor="email"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Email
                                </label>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            type: "email",
                                            message:
                                                "Please input a valid email address!",
                                        },
                                    ]}>
                                    <Input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font"
                                        placeholder="Email"
                                        value={registrationData.email}
                                        onChange={e =>
                                            setRegistrationData({
                                                ...registrationData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className="-mt-4">
                                <label
                                    htmlFor="number"
                                    className="block mb-1 font-normal font-serif text-gray-500">
                                    Phone Number
                                </label>
                                <Form.Item
                                    name="number"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your phone number!",
                                        },
                                    ]}>
                                    <Input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded leading-5 placeholder-font"
                                        placeholder="Phone Number"
                                        value={registrationData.number}
                                        onChange={e =>
                                            setRegistrationData({
                                                ...registrationData,
                                                number: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Item>
                            </div>

                            <div className=" flex justify-end">
                                <Form.Item className="text-center ">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                                        Register
                                    </button>
                                </Form.Item>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
