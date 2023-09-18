// HelpSection.js
'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { Accordion } from 'flowbite-react';

function HelpSection() {
    return (
        <>
            <Header />
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto">
                    <div className="bg-white p-4 mb-10 rounded-lg shadow-lg">
                    <h2 className="text-black text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
                    {/* List of FAQs */}
                    <Accordion className='text-xl mb-2'>
                        <Accordion.Panel>
                            <Accordion.Title className="text-gray-900">
                                What is Online Legal Consulation?
                            </Accordion.Title>
                            <Accordion.Content>

                                <p className="mb-2 text-gray-900">
                                    Online Legal consultation or online Lawyer consultation is a method to
                                    connect Users and Lawyers virtually. It is a convenient and easy way to get online Lawyer
                                    advice using NyayBazaar.
                                </p>


                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="text-gray-900">
                                Are your Lawyers qualified?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-900">

                                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                    has a design equivalent in our Figma file.

                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>

                        <Accordion.Panel>
                            <Accordion.Title className="text-gray-900">
                                How do I make an account?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-900">

                                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                    has a design equivalent in our Figma file.

                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    </div>

                    {/* Form for Further Questions */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-black text-xl font-semibold mb-4">Still Have Questions?</h3>
                        <p className="text-gray-600 mb-4">Feel free to reach out to us. Fill out the form below:</p>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-medium mb-2" htmlFor="question">Your Question</label>
                                <textarea
                                    id="question"
                                    name="question"
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your question here..."
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-medium mb-2" htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HelpSection;
