import React from "react";

interface ContactInfoProps {
  prefix?: string;
}

export function ContactInfo({ prefix = "For questions" }: ContactInfoProps) {
  return (
    <>
      <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
      <p>
        {prefix}, email help@postinnovations.com or mail us at 10900 Research
        Blvd., Ste 160C #1383, Austin, TX 78759.
      </p>
    </>
  );
}
