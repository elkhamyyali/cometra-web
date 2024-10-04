import Image from "next/image";
import React from "react";
import ContactMap from "../../../public/assets/contactmap.png";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#0C1D6D] text-white p-8 rounded-none flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <p>
          Email:{" "}
          <a href="mailto:contact@gmail.com" className="text-blue-300">
            contact@gmail.com
          </a>
        </p>
        <p>Phone: +201234567890</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Where to Find Us</h3>
        <p>123 Street</p>
        <p>Cairo - Egypt</p>
      </div>
      <div className="mt-6">
        <Image
          src={ContactMap}
          width={100}
          height={100}
          alt="Map"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
