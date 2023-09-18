// FaqSection.js
import React from 'react';
import { Accordion, AccordionItem } from 'flowbite-react';

const FaqSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl text-black text-center font-semibold mb-8">Frequently Asked Questions</h2>

        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
            What is Online Legal Consulation?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                Online Legal consultation or online Lawyer consultation is a method to 
                connect Users and Lawyers virtually. It is a convenient and easy way to get online Lawyer 
                advice using NyayBazaar.
                </p>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Are your Lawyers qualified?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
