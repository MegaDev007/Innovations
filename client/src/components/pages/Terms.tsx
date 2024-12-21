import React from "react";
import { PolicyLayout } from "../layout/Policy";
import { ContactInfo } from "../layout/PolicyContactInfo";

export function Terms() {
  return (
    <PolicyLayout title="Terms and Conditions">
      <p className="mb-6">
        Welcome to Post Innovations ("Company," "we," "our," "us")! These Terms
        and Conditions ("Terms") govern your access to and use of our website
        (https://www.postinnovations.com), services, and any associated content.
        By using our services, you agree to these Terms. If you do not agree,
        please refrain from using our services.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Service Overview</h2>
      <p className="mb-6">
        Post Innovations provides signpost rental services for real estate
        professionals. Our services are designed to market real estate listings
        effectively in Austin, TX.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        2. Account Responsibilities
      </h2>
      <ul className="pl-6 mb-6 list-disc">
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials.
        </li>
        <li>
          Ensure the information provided during registration is accurate and up
          to date.
        </li>
        <li>Unauthorized use of your account must be reported immediately.</li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        3. Order Placement and Payments
      </h2>
      <p className="mb-6">
        Orders are placed via our website. Payments are securely processed
        through Stripe. Full payment is required upon order placement.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Refund Policy</h2>
      <p className="mb-6">
        Customers may cancel an order and receive a refund if the signpost has
        not been installed. Refund requests must be initiated through your
        dashboard.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Liability</h2>
      <p className="mb-6">
        We are not liable for any indirect or consequential losses arising from
        the use of our services. Our maximum liability is limited to the fees
        paid for the specific order.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Amendments</h2>
      <p className="mb-6">
        Post Innovations reserves the right to modify these Terms at any time.
        Updated Terms will be posted on our website, and continued use
        constitutes acceptance.
      </p>

      <ContactInfo />
    </PolicyLayout>
  );
}
