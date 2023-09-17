import React from 'react';

const ServicesSection = () => {
  // Define your services data here
  const servicesData = [
    {
      title: 'Property',
      description: 'Our lawyers are the best when it comes to acquiring properties. We have a team of lawyers who are experts in property law and can help you with any property related issues.',
    },
    {
      title: 'Service 2',
      description: 'Description of Service 2.',
    },
    {
      title: 'Service 3',
      description: 'Description of Service 3.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-black text-center font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
