import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-gray-800 text-[#07142b] rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-white">
      <h1 className="text-4xl leading-10 font-semibold text-[#07142b]">
        Got an Idea? We&apos;ve got the skills. Let&apos;s team up.
      </h1>
      <p className="text-[#46464e]">
        Tell us more about yourself and what you&apos;ve got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
