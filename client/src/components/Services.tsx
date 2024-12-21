import React from "react";
import { FaShieldAlt, FaClock, FaWrench } from "react-icons/fa";

const services = [
  {
    icon: FaShieldAlt,
    title: "Premium Quality",
    description:
      "All our posts are made from high-grade materials built to last",
  },
  {
    icon: FaClock,
    title: "Fast Installation",
    description:
      "Professional installation within 48 hours of order confirmation",
  },
  {
    icon: FaWrench,
    title: "Expert Service",
    description: "Certified installers with years of experience",
  },
];

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide comprehensive post installation services tailored to your
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
              >
                <div className="flex items-center justify-center mb-6 bg-blue-100 rounded-full w-14 h-14">
                  <Icon className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="p-8 text-white bg-blue-600 rounded-2xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-bold">Ready to get started?</h3>
              <p className="mb-6">
                Get in touch with us today to discuss your project requirements
              </p>
              <button className="px-8 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-gray-100">
                Contact Us
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  ✓
                </div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  ✓
                </div>
                <span>Professional installation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  ✓
                </div>
                <span>Warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
