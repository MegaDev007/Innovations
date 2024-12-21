import React from "react";
import { PolicyLayout } from "../layout/Policy";
import { ContactInfo } from "../layout/PolicyContactInfo";

export function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="mb-6">
        Post Innovations values your privacy. This Privacy Policy explains how
        we collect, use, and protect your personal information.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        1. Information We Collect
      </h2>
      <ul className="pl-6 mb-6 list-disc">
        <li>
          Personal Information: Name, email address, phone number, and billing
          information during order placement.
        </li>
        <li>
          Non-Personal Information: IP address, browser type, and usage data.
        </li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        2. How We Use Your Information
      </h2>
      <ul className="pl-6 mb-6 list-disc">
        <li>To process and fulfill orders.</li>
        <li>To improve our services and website functionality.</li>
        <li>To send marketing emails with your consent.</li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Data Security</h2>
      <p className="mb-6">
        We do not store your payment information. All transactions are securely
        processed through Stripe. Reasonable measures are taken to protect your
        data from unauthorized access.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Email Marketing</h2>
      <p className="mb-6">
        If you provide consent, we may send promotional emails about our
        products and services. You can opt out at any time.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        5. Third-Party Sharing
      </h2>
      <p className="mb-6">
        We do not sell your information. Data is shared with third parties only
        as necessary for payment processing or service delivery.
      </p>

      <ContactInfo prefix="For privacy-related inquiries" />
    </PolicyLayout>
  );
}
