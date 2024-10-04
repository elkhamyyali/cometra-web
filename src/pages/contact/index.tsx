import ContactInfo from "@/components/molecules/ContactInfo";
import SendAMessage from "@/components/molecules/SendAMessage";
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(34,201,186,1) 0%, rgba(78,121,129,1) 47%, rgba(1,34,65,1) 75%)",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-0 max-w-4xl w-full">
        <SendAMessage />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactForm;
