import React from "react";

const TripTitle: React.FC = () => {
  return (
    <div className="bg-white  p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#0C1D6D]">Trip Title</h2>
      <p className="text-gray-600 mb-6">
        Nestled in the heart of the Indian Ocean, the Maldives is an enchanting
        archipelago off the coast of India, renowned for its crystal-clear
        waters and idyllic white-sand beaches. The vibrant coral reefs
        surrounding the islands teem with tropical marine life, making it a
        premier destination for travelers worldwide. Experience awe-inspiring
        sunsets, swim alongside manta rays and sea turtles, and relax on
        pristine beaches with this unforgettable gateway.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Options</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Destination:</span> Calbi, Asdwan,
              Philae
            </li>
            <li>
              <span className="font-medium">Duration:</span> 8 days
            </li>
            <li>
              <span className="font-medium">Age range:</span> 16 - 55
            </li>
            <li>
              <span className="font-medium">Operated in:</span> English
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="bg-[#0C1D6D] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Send Request
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripTitle;
