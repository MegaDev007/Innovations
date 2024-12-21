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
      <div className="container mx-auto px-4">
        <SectionTitle
          title="SERVICES AND PRICING"
          subtitle="Flexible solutions for your business needs"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Submit your order online 24/7. We rent posts for as long as you
              need to rent them. Our services include the delivery and
              installation of your POST. When you want to remove your sign, let
              us know by logging into your Post Innovations account and clicking
              the 'removal' button for that POST order. We will send a driver
              out to remove the post for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
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
