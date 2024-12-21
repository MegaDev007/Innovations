import React from 'react';
import SectionTitle from './common/SectionTitle';

const services = [
  {
    title: 'Our Purpose',
    description: 'Post Innovations understands the time restraints of realtors and marketing agents of all types. Organizing your post installation and removal at a reasonable price will lessen the burden of doing it yourself.'
  },
  {
    title: 'Our Values',
    description: 'Predicting how long you will need your sign post is nearly impossible, so we give you all the time you need. Post Innovations creates high-quality signs that are made to look exceptional and withstand the test of time!'
  },
  {
    title: 'Our Mission',
    description: 'Modern businesses need fast, efficient, and affordable partners they can rely upon. Post Innovations is dedicated to providing the best possible service for the best possible price.'
  }
];

export default function ServicesInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Post Installation and Removal Services in Austin"
          subtitle="Professional services tailored to your needs"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}