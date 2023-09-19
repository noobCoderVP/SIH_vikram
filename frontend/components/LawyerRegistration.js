import React from "react";
import { Button } from "@mui/material";

function LawyerRegistration() {
    return (
        <section className="bg-white text-black pt-10">
            <div className="w-full mx-auto text-center py-2 bg-slate-100">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
                    Register as a Lawyer
                </h1>
            </div>
            <div className="flex w-5/6 items-center">
                <p className="p-10">
                    Are you a dedicated legal professional looking to expand
                    your practice and reach a broader client base? Look no
                    further! Join our platform and register today to showcase
                    your expertise and offer your legal services to a vast
                    online audience. Our website provides a unique opportunity
                    for lawyers like you to connect with clients seeking legal
                    assistance. By registering, you'll gain access to a diverse
                    pool of potential clients, boost your online presence, and
                    take your legal career to new heights. Don't miss out on
                    this chance to grow your legal practice and make a
                    significant impact. Register now and start serving clients
                    through our platform!
                </p>
                <div className="flex flex-col gap-2">
                    <Button
                        color="primary"
                        href="/lawyer/register"
                        variant="contained">
                        Register
                    </Button>
                    <Button
                        color="primary"
                        href="/lawyer/login"
                        variant="outlined">
                        Login
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default LawyerRegistration;
