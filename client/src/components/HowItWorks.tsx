import React from "react";
import { FaClipboardList, FaCog, FaTruck, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";

const steps = [
  {
    icon: FaClipboardList,
    title: "Order",
    description:
      "Simply click the order button and select your POST and Add-Ons.",
  },
  {
    icon: FaCog,
    title: "Processing",
    description:
      "We create a preview of your sign post for you to review before we produce a rendering.",
  },
  {
    icon: FaTruck,
    title: "Out for Installation",
    description:
      "We provide 5' stained posts in two color choices, Espresso and White.",
  },
  {
    icon: FaCheckCircle,
    title: "Completed",
    description:
      "Just sit back and let our staff do all the work! You will receive a notification.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="HOW IT WORKS"
          subtitle="Our streamlined process ensures a smooth experience from order to installation"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative ">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 -z-10" />
                )}
                <div className="p-6 transition-shadow bg-white shadow-lg  rounded-xl hover:shadow-xl">
                  <div className="flex items-center justify-center mx-auto mb-6 bg-blue-100 rounded-full w-14 h-14">
                    <Icon className="text-blue-600 w-7 h-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600 ">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
