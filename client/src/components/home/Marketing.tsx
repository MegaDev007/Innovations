import React from "react";
import { MdCampaign } from "react-icons/md";

export default function Marketing() {
  return (
    <section className="py-20 text-white bg-blue-600">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 bg-blue-500 rounded-full">
            <MdCampaign className="w-8 h-8" />
          </div>
          <h2 className="mb-6 text-4xl font-bold">
            Post Installation for Marketers!
          </h2>
          <p className="text-xl leading-relaxed text-blue-100">
            If you have something to sell, let people know - IN BIG LETTERS! We
            provide advertising posts for real estate agents, marketing
            campaigns, promotional events, and reception venues, and we can
            market your products and/or services too!
          </p>
        </div>
      </div>
    </section>
  );
}
