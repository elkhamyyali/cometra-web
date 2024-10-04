import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Add this import

type Props = {};

const Faqs = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle collapse
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const programs = [
    {
      day: "Day 1",
      title: "French Quarter",
      duration: "30 minutes",
      admission: "Admission Ticket Free",
    },
    {
      day: "Day 2",
      title: "Garden District",
      duration: "45 minutes",
      admission: "Admission Ticket Required",
    },
    {
      day: "Day 3",
      title: "City Park",
      duration: "1 hour",
      admission: "Admission Ticket Free",
    },
    {
      day: "Day 1",
      title: "French Quarter",
      duration: "30 minutes",
      admission: "Admission Ticket Free",
    },
    {
      day: "Day 2",
      title: "Garden District",
      duration: "45 minutes",
      admission: "Admission Ticket Required",
    },
    {
      day: "Day 3",
      title: "City Park",
      duration: "1 hour",
      admission: "Admission Ticket Free",
    },
  ];

  return (
    <div className="flex justify-center py-9 items-start bg-[#EBF9FB] ">
      {" "}
      {/* Center horizontally */}
      <div className="lg:w-2/3 w-full px-4 lg:px-0 mx-auto">
        {" "}
        {/* Center content within its container */}
        <h2 className="text-2xl font-bold mb-4 text-[#0C1D6D]">FAQS</h2>
        <div className="grid grid-cols-1 gap-4">
          {programs.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <div className="flex flex-col w-full">
                <div
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium mb-2">
                    {item.day}: {item.title}
                  </h3>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  )}
                </div>

                {activeIndex === index && (
                  <div className="mt-2 text-gray-600 transition-all duration-300 ease-in-out">
                    <p>
                      {item.duration} + {item.admission}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
