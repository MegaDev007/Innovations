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

          <div className="grid gap-8 md:grid-cols-2">
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
                  className="w-full px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <MdPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(713) 909-4915</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <MdEmail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@postinnovations.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <MdLocationOn className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      123 Post Avenue, Suite 100
                      <br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
