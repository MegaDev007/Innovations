import React from "react";

interface ContactInfoProps {
  prefix?: string;
}

export function ContactInfo({ prefix = "For questions" }: ContactInfoProps) {
  return (
    <>
      <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
      <p>
        {prefix}, email help@postinnovations.com or mail us at 9741 N Lake Creek
        Pkwy, Ste C #128, Austin, TX 78717.
      </p>
    </>
  );
}
