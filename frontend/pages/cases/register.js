import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { DatePicker } from "antd";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
    Button as ButtonAnt,
    Form,
    Input,
    message,
    Checkbox,
    Select,
    Dropdown,
} from "antd";
import Header from "@/components/Header";
import {
    options,
    tagRender,
    experienceItems,
    tierItems,
} from "@/public/utlis/RegisterPageItems";

const steps = ["Case details", "Documents", "Payment"];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

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

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = step => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <>
            <Header />
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "20px",
                }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton
                                color="inherit"
                                onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}>
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {activeStep == 0 && (
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
                                            Case details
                                        </h1>
                                    </div>

                                    {/* Username */}
                                    <div className="mt-4">
                                        <label
                                            htmlFor="client"
                                            className="block mb-1 font-normal font-serif text-gray-500">
                                            Client Username
                                        </label>
                                        <Form.Item
                                            name="client"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input client username!",
                                                },
                                            ]}>
                                            <Input
                                                className="leading-5 border-1 rounded-lg border-gray-300 placeholder-font"
                                                placeholder="client username"
                                                autoFocus
                                            />
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="Your username"
                                            className="block mb-1 font-normal font-serif text-gray-500">
                                            Your username
                                        </label>
                                        <Form.Item
                                            name="lawyer"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your username!",
                                                },
                                            ]}>
                                            <Input
                                                className="leading-5 border-1 rounded-lg border-gray-300 placeholder-font"
                                                placeholder="Username"
                                            />
                                        </Form.Item>
                                    </div>

                                    {/* case tags */}
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
                                                    message:
                                                        "Please select at least one tag!",
                                                },
                                            ]}>
                                            <Select
                                                mode="multiple"
                                                tagRender={tagRender}
                                                defaultValue={[]}
                                                style={{
                                                    width: "100%",
                                                }}
                                                options={options.map(
                                                    option => ({
                                                        label: option.value,
                                                        value: option.value,
                                                    }),
                                                )}
                                            />
                                        </Form.Item>
                                    </div>

                                    {/* Email */}
                                    <div className="-mt-2">
                                        <label
                                            htmlFor="cemail"
                                            className="block mb-1 font-normal font-serif text-gray-500">
                                            Client Email
                                        </label>
                                        <Form.Item
                                            name="cemail"
                                            rules={[
                                                {
                                                    type: "email",
                                                    required: true,
                                                    message:
                                                        "Please input client valid email!",
                                                },
                                            ]}>
                                            <Input
                                                className="leading-5 border-1 rounded-lg placeholder-font border-gray-300"
                                                placeholder="Client Email"
                                            />
                                        </Form.Item>
                                    </div>

                                    {/* Email your */}
                                    <div className="-mt-2">
                                        <label
                                            htmlFor="lemail"
                                            className="block mb-1 font-normal font-serif text-gray-500">
                                            Your Email
                                        </label>
                                        <Form.Item
                                            name="lemail"
                                            rules={[
                                                {
                                                    type: "email",
                                                    required: true,
                                                    message:
                                                        "Please input your valid email!",
                                                },
                                            ]}>
                                            <Input
                                                className="leading-5 border-1 rounded-lg placeholder-font border-gray-300"
                                                placeholder="Email"
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
                                                    message:
                                                        "Please input your password!",
                                                },
                                            ]}>
                                            <Input.Password
                                                className="rounded-lg focus:ring-2 focus:ring-blue-500"
                                                placeholder="Account Password"
                                            />
                                        </Form.Item>
                                    </div>

                                    {/* About */}
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block mb-1 font-normal font-serif text-gray-500">
                                            Description
                                        </label>
                                        <Form.Item
                                            name="about"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Write something about the case",
                                                },
                                            ]}>
                                            <Input.TextArea
                                                rows={5}
                                                placeholder="Write something about the case"
                                            />
                                        </Form.Item>
                                    </div>
                                </Form>
                            )}
                            {activeStep == 1 && <h1>Step 2</h1>}
                            {activeStep == 2 && <h1>Step 3</h1>}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}>
                                <Button
                                    color="secondary"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}>
                                    Back
                                </Button>
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography
                                            variant="caption"
                                            sx={{ display: "inline-block" }}>
                                            Step {activeStep + 1} already
                                            completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() ===
                                            totalSteps() - 1
                                                ? "Finish"
                                                : "Complete Step"}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </>
    );
}
