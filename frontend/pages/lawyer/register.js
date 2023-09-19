import React, { useState } from "react";
import { Button, Form, Input, message, Checkbox, Select, Dropdown } from "antd";
import { useRouter } from "next/router";

import {
    options,
    tagRender,
    experienceItems,
    tierItems,
} from "@/public/utlis/RegisterPageItems";
import Link from "next/link";
import axios from "axios";

const Register = () => {
    const [tier, setTier] = useState("Select");
    const router = useRouter();

    const onFinish = async values => {
        // For POST Request
        try {
            const response = await axios.post(
                "http://localhost:5000/lawyer/register",
                values,
            );
            if (response.data.status) {
                message.success(response.data.message);
                router.push("/lawyer/login");
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            message.error("Internal Server Error!");
        }
    };

    const onFinishFailed = errorInfo => {
        // errorInfo Contains values and we can't log them
        message.info("Please fill out the form properly!!");
    };

    function handleTierChange(value) {
        setTier(value);
    }

    return (
        <div className="bg-white">
            <Form
                name="basic"
                className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-6"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                {/* Join NyayBazaar Part */}
                <div className="border-b-2 pb-3 flex justify-between items-center">
                    <h1 className="text-lg font-semibold text-gray-500">
                        Join NyayBazaar
                    </h1>
                    <h6 className="text-xs text-gray-500">
                        Already registered?
                        <Link
                            href="/lawyer/login"
                            className="text-orange-500 ml-2 underline">
                            Login
                        </Link>
                    </h6>
                </div>

                {/* Username */}
                <div className="mt-4">
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
                            className="leading-5 border-1 rounded-lg border-gray-300 placeholder-font"
                            placeholder="full name"
                            autoFocus
                        />
                    </Form.Item>
                </div>
                <div>
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
                                message: "Please input your username!",
                            },
                        ]}>
                        <Input
                            className="leading-5 border-1 rounded-lg border-gray-300 placeholder-font"
                            placeholder="Username"
                        />
                    </Form.Item>
                </div>

                {/* Email */}
                <div className="-mt-2">
                    <label
                        htmlFor="email"
                        className="block mb-1 font-normal font-serif text-gray-500">
                        Email
                    </label>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input your valid email!",
                            },
                        ]}>
                        <Input
                            className="leading-5 border-1 rounded-lg placeholder-font border-gray-300"
                            placeholder="Email"
                        />
                    </Form.Item>
                </div>

                {/* Tags */}
                <div className="-mt-2">
                    <label
                        htmlFor="tags"
                        className="block mb-1 font-normal font-serif text-gray-500">
                        Tags
                    </label>
                    <Form.Item
                        name="tags"
                        rules={[
                            {
                                required: true,
                                message: "Please select at least one tag!",
                            },
                        ]}>
                        <Select
                            mode="multiple"
                            tagRender={tagRender}
                            defaultValue={[]}
                            style={{
                                width: "100%",
                            }}
                            options={options.map(option => ({
                                label: option.value,
                                value: option.value,
                            }))}
                        />
                    </Form.Item>
                </div>

                {/* Tier and Experience */}
                <div className="-mt-2 flex items-center justify-between mr-28">
                    {/* Experience */}
                    <div>
                        <label
                            htmlFor="experience"
                            className="block mb-1 font-normal font-serif text-gray-500">
                            Experience
                        </label>
                        <Form.Item
                            name="experience"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your experience!",
                                },
                            ]}>
                            <Input
                                className="leading-5 border-1 rounded-lg placeholder-font border-gray-300"
                                placeholder="Experience (yrs)"
                                type="number"
                            />
                        </Form.Item>
                    </div>

                    {/* Tier */}
                    <div className="ml-4">
                        <label
                            htmlFor="tier"
                            className="block mb-1 font-normal font-serif text-gray-500">
                            Tier
                        </label>
                        <Form.Item
                            name="tier"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your tier!",
                                },
                            ]}>
                            <Select
                                placeholder="Select"
                                onChange={handleTierChange}
                                value={tier}>
                                {tierItems.map(item => (
                                    <Select.Option
                                        key={item.key}
                                        value={item.label}>
                                        {item.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                {/* Password */}
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
                                message: "Please input your password!",
                            },
                        ]}>
                        <Input.Password
                            className="rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                        />
                    </Form.Item>
                </div>

                {/* About */}
                {/* Tier and Experience */}
                <div className="-mt-2 flex items-center justify-between mr-28">
                    {/* Experience */}
                    <div>
                        <label
                            htmlFor="experience"
                            className="block mb-1 font-normal font-serif text-gray-500">
                            Experience
                        </label>
                        <Form.Item
                            name="experience"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your experience!",
                                },
                            ]}>
                            <Input
                                className="leading-5 border-1 rounded-lg placeholder-font border-gray-300"
                                placeholder="Experience (yrs)"
                                type="number"
                            />
                        </Form.Item>
                    </div>
                </div>

                {/* About */}
                <div>
                    <label
                        htmlFor="about"
                        className="block mb-1 font-normal font-serif text-gray-500">
                        About
                    </label>
                    <Form.Item
                        name="about"
                        rules={[
                            {
                                required: true,
                                message: "Please tell us about yourself!",
                            },
                        ]}>
                        <Input.TextArea
                            rows={5}
                            placeholder="What defines you?"
                        />
                    </Form.Item>
                </div>

                {/* Newsletter */}
                <div className="-mt-2">
                    <Form.Item name="newsletter" valuePropName="checked">
                        <Checkbox className="checkboxText text-gray-500">
                            Receive relevant offers and promotional
                            communication from NyayBazaar
                        </Checkbox>
                    </Form.Item>
                </div>

                <div className="-mt-4">
                    <h6 className="agreementRegister text-gray-500">
                        By signing up, I agree to{" "}
                        <a href="/terms-Conditions" className="text-blue-500">
                            terms
                        </a>
                    </h6>
                </div>

                {/* Register Button */}
                <Form.Item className="text-center mt-4">
                    <Button
                        className="bg-blue-700"
                        type="primary"
                        htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
