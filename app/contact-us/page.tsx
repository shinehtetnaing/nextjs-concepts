import ContactForm from "@/components/contact-us/ContactForm";
import React from "react";

const page = () => {
  return (
    <main className="pt-16 px-5">
      <h1 className="text-5xl text-center font-semibold mb-7">Contact Me</h1>
      <p className="text-center mb-14">
        Please contact me directly at{" "}
        <a href="mailto:admin@admin.com" className="underline">
          admin@admin.com
        </a>{" "}
        or through this form.
      </p>
      <ContactForm />
    </main>
  );
};

export default page;
