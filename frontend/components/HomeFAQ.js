import React from "react";
import { Accordion } from "flowbite-react";
import { AccordionItem } from "flowbite-react";

const HomeFAQ = () => {
    return (
        <>
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-semibold mb-8">Frequently Asked Questions</h2>

                <Accordion>
                    <AccordionItem title="Question 1">
                        Answer to Question 1.
                    </AccordionItem>

                    <AccordionItem title="Question 2">
                        Answer to Question 2.
                    </AccordionItem>

                    <AccordionItem title="Question 3">
                        Answer to Question 3.
                    </AccordionItem>

                    {/* Add more FAQ items as needed */}
                </Accordion>
            </div>
        </section>
        </>
    );
};

export default HomeFAQ;