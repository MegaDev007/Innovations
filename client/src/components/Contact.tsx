import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import SectionTitle from "./common/SectionTitle";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Get in Touch"
            subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />

          <div className="gap-8 ">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white transition-colors bg-[#20b8cd] rounded-lg hover:bg-[#20b8cd]/80"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
