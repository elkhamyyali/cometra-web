import React from "react";
import { FaStar } from "react-icons/fa";

const OurClients = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Title */}
      <h2 className="text-3xl font-dinCondensed text-[#4ADFDF] mb-4 text-center">
        Our Clients
      </h2>
      <p className=" text-xl font-dinCondensed text-[#0C1D6D] text-center mb-10">
        Hear what our clients have to say about our exclusive vacation packages
        and services.
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-5 h-5 text-black" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">10 Feb 2024</span>
          </div>
          <p className="text-gray-700">
            Each month we pick a few breathtaking places were super excited
            about and use our connections to negotiate extraordinary vacation
            packages – exclusively for members. Offers so good, its like buying
            Bitcoin in 2010.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-bold">User Name</h4>
              <span className="text-gray-500 text-sm">Job title</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-5 h-5 text-black" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">15 Jan 2024</span>
          </div>
          <p className="text-gray-700">
            I was thrilled with the vacation package offered. It felt like a
            once-in-a-lifetime deal with fantastic customer service and
            unbeatable offers!
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-bold">User Name</h4>
              <span className="text-gray-500 text-sm">Job title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
