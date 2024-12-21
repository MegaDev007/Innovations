import React from "react";
import { FaRegClock, FaTv, FaRegObjectGroup, FaRocket } from "react-icons/fa";
import Step from "./Step";

const steps = [
  {
    icon: FaRegClock,
    title: "Order",
    description:
      "Simply click the order button and select your POST and Add-Ons.",
  },
  {
    icon: FaTv,
    title: "Processing",
    description:
      "We create a preview of your sign post for you to review before we produce a rendering. Choose from several options that best suit your needs!",
  },
  {
    icon: FaRegObjectGroup,
    title: "Out for Installation",
    description:
      "We provide 4', 5' and 6' stained posts in three color choices, Espresso, Natural and Red Cedar. We also offer a range of products and special services for your convenience.",
  },
  {
    icon: FaRocket,
    title: "Completed",
    description:
      "Just sit back and let our staff do all the work! Once your post is installed you will receive a notification.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="how-it-works"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <span className="block mb-4 font-medium text-blue-600">
            POST INNOVATIONS
          </span>
          <h2 className="mb-4 text-4xl font-bold">HOW IT WORKS</h2>
          <div className="flex items-center justify-center gap-4 mb-6 text-gray-600">
            <span>Convenient</span>
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Efficient</span>
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Affordable</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
