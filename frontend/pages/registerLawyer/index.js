import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  Checkbox,
  Select,
  Dropdown,
} from "antd";

import {
  options,
  tagRender,
  experienceItems,
  tierItems,
} from "@/public/utlis/RegisterPageItems";


const App = () => {
  const [experience, setExperience] = useState("Select");
  const [tier, setTier] = useState("Select");

  const onFinish = async (values) => {
    // For POST Request 
    message.success("Registered Successfully");
    console.log(values)
  };

  const onFinishFailed = (errorInfo) => {
    // errorInfo Contains values and we can't log them
    message.info("Please fill out the form properly!!");
  };

  function handleTierChange(value) {
    setTier(value);
  }

  function handleExperienceChange(value) {
    setExperience(value);
  }

  return (
    <Form
      name="basic"
      className="mt-24 m-auto w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-6"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* Join NyayBazaar Part */}
      <div className="border-b-2 pb-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-500">Join NyayBazaar</h1>
        <h6 className="text-xs text-gray-500">
          Already registered?{" "}
          <a href="/login" className="text-orange-500">
            Login
          </a>
        </h6>
      </div>

      {/* Username */}
      <div className="mt-4">
        <label
          htmlFor="username"
          className="block mb-1 font-normal font-serif text-gray-500"
        >
          Username
        </label>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="leading-5 border-1 rounded-lg border-gray-300 placeholder-font"
            placeholder="Username"
            autoFocus
          />
        </Form.Item>
      </div>

      {/* Email */}
      <div className="-mt-2">
        <label
          htmlFor="email"
          className="block mb-1 font-normal font-serif text-gray-500"
        >
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
          ]}
        >
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
          className="block mb-1 font-normal font-serif text-gray-500"
        >
          Tags
        </label>
        <Form.Item
          name="tags"
          rules={[
            {
              required: true,
              message: "Please select at least one tag!",
            },
          ]}
        >
          <Select
            mode="multiple"
            tagRender={tagRender}
            defaultValue={[]}
            style={{
              width: "100%",
            }}
            options={options.map((option) => ({
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
            className="block mb-1 font-normal font-serif text-gray-500"
          >
            Experience
          </label>
          <Form.Item
            name="experience"
            rules={[
              {
                required: true,
                message: "Please select your experience!",
              },
            ]}
          >
            <Select
              placeholder="Select"
              onChange={handleExperienceChange}
              value={experience}
            >
              {experienceItems.map((item) => (
                <Select.Option key={item.key} value={item.label}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        {/* Tier */}
        <div>
          <label
            htmlFor="tier"
            className="block mb-1 font-normal font-serif text-gray-500"
          >
            Tier
          </label>
          <Form.Item
            name="tier"
            rules={[
              {
                required: true,
                message: "Please select your tier!",
              },
            ]}
          >
            <Select
              placeholder="Select"
              onChange={handleTierChange}
              value={tier}
            >
              {tierItems.map((item) => (
                <Select.Option key={item.key} value={item.label}>
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
          className="block mb-1 font-normal font-serif text-gray-500"
        >
          Create Password
        </label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
        </Form.Item>
      </div>

      {/* Newsletter */}
      <div className="-mt-2">
        <Form.Item name="newsletter" valuePropName="checked">
          <Checkbox className="checkboxText text-gray-500">
            Receive relevant offers and promotional communication from
            NyayBazaar
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
        <Button className="bg-blue-700" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
