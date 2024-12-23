import React from "react";
import SectionTitle from "./common/SectionTitle";

const services = [
  {
    title: "Our Purpose",
    description:
      "Post Innovations understands the time restraints of realtors and marketing agents of all types. Organizing your post installation and removal at a reasonable price will lessen the burden of doing it yourself.",
  },
  {
    title: "Our Values",
    description:
      "Predicting how long you will need your sign post is nearly impossible, so we give you all the time you need. Post Innovations creates high-quality signs that are made to look exceptional and withstand the test of time!",
  },
  {
    title: "Our Mission",
    description:
      "Modern businesses need fast, efficient, and affordable partners they can rely upon. Post Innovations is dedicated to providing the best possible service for the best possible price.",
  },
];

export default function ServicesInfo() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Post Installation and Removal Services in Austin"
          subtitle="Professional services tailored to your needs"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#20b8cd]">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
