import React, { useState } from "react";
import { Button, Form, Input, message, Checkbox, Select, Dropdown } from "antd";
import Link from "next/link";
import {
    options,
    tagRender,
    experienceItems,
    tierItems,
} from "@/public/utlis/RegisterPageItems";

const Login = () => {
    const onFinish = async values => {
        // For POST Request
        message.success("Registered Successfully");
        console.log(values);
    };

    const onFinishFailed = errorInfo => {
        // errorInfo Contains values and we can't log them
        message.info("Please fill out the form properly!!");
    };

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
                        Login To NyayBazaar
                    </h1>
                    <h6 className="text-xs text-gray-500">
                        New Lawyer?
                        <Link
                            href="/lawyer/register"
                            className="text-orange-500 ml-2 underline">
                            Register
                        </Link>
                    </h6>
                </div>

                {/* Username */}
                <div className="mt-4">
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
                            autoFocus
                        />
                    </Form.Item>
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

                {/* Register Button */}
                <Form.Item className="text-center mt-4">
                    <Button
                        className="bg-blue-700"
                        type="primary"
                        htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
