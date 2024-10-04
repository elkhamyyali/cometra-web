import Image from "next/image";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Chevron icons for collapse/expand
import MapImage from "../../../public/assets/69219368_2571828409542819_6020075708263432192_n 1.png";

const ProgramDetails: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle collapse
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg p-8 md:px-0 flex flex-col md:flex-row md:justify-between">
      {/* Left Column: Program Details */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-6 text-[#0C1D6D]">Program</h2>

        <div className="relative grid grid-cols-1 gap-6">
          {/* Vertical line */}
          <div className="absolute h-full w-[2px] bg-black left-[12px] top-0"></div>

          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="pb-6 last:border-b-0 relative pl-10" // Adjust padding for line and dot
            >
              {/* Dot */}
              <div className="absolute h-4 w-4 rounded-full bg-black left-[5px] top-2"></div>

              {/* Program Details with Expand/Collapse */}
              <div className="flex flex-col w-full">
                <div
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold mb-2">
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

        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Right Column: Map Image */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0 md:ml-8">
        <Image src={MapImage} alt="Map" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default ProgramDetails;
