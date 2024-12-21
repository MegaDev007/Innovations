import React from "react";
import { PolicyLayout } from "../layout/Policy";
import { ContactInfo } from "../layout/PolicyContactInfo";

export function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy">
      <p className="mb-6">
        Post Innovations is committed to customer satisfaction. Please review
        our refund policy below.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        1. Eligibility for Refunds
      </h2>
      <ul className="pl-6 mb-6 list-disc">
        <li>Refunds are available if the signpost has not been installed.</li>
        <li>
          Requests must be made through your dashboard before installation
          occurs.
        </li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        2. Processing Refunds
      </h2>
      <p className="mb-6">
        Approved refunds will be processed back to the original payment method
        within 5-10 business days.
      </p>

      <ContactInfo prefix="For refund assistance" />
    </PolicyLayout>
  );
}
