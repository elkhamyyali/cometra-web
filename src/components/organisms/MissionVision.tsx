import Image from "next/image";
import React from "react";
import SecondImage from "../../../public/assets/secondlast.png";

const MissionVisionComponent = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 items-center">
      {/* Image */}
      <div className="hidden md:block relative w-1/3  max-w-xs">
        <Image
          src={SecondImage}
          alt="Decorative signpost"
          className="w-full h-auto object-cover transform -translate-x-10 -translate-y-2"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start w-full md:w-2/3 mt-6 md:mt-0">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-dinCondensed text-[#4ADFDF] mb-4">
            Our Mission
          </h2>
          <p className="text-navy-800 mb-4">
            VIP Exclusives™: your backstage pass to vacation like us.VIP
            Exclusives™: your backstage pass to vacation like us.
          </p>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left mt-6">
          <h2 className="text-3xl font-dinCondensed text-[#4ADFDF] mb-4">
            Our Vision
          </h2>
          <p className="text-navy-800 mb-4">
            VIP Exclusives™: your backstage pass to vacation like us.VIP
            Exclusives™: your backstage pass to vacation like us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionComponent;
