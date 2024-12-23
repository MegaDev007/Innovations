import React from "react";
import { MdAccessTime, MdLocalShipping, MdSecurity } from "react-icons/md";
import SectionTitle from "./common/SectionTitle";

const features = [
  {
    icon: MdAccessTime,
    text: "24/7 Online Ordering",
  },
  {
    icon: MdLocalShipping,
    text: "Delivery & Installation Included",
  },
  {
    icon: MdSecurity,
    text: "Flexible Rental Duration",
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="SERVICES AND PRICING"
          subtitle="Flexible solutions for your business needs"
        />

        <div className="max-w-4xl mx-auto overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="p-8 md:p-12">
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Submit your order online 24/7. We rent posts for as long as you
              need to rent them. Our services include the delivery and
              installation of your POST. When you want to remove your sign, let
              us know by logging into your Post Innovations account and clicking
              the 'removal' button for that POST order. We will send a driver
              out to remove the post for you.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                      <Icon className="w-6 h-6 text-[#20b8cd]" />
                    </div>
                    <span className="font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
