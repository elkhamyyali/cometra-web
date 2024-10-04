import Image from "next/image";
import React from "react";
import Ellipse from "../../../public/assets/lastwant.png";

const VipExclusive = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2 lg:pl-9 w-full text-center md:text-left">
        <h2 className="text-xl  text-[#4ADFDF] mb-4">About Comerta</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          VIP Exclusives™: your backstage pass to vacation like us.
        </h1>
        <p className="text-gray-600 mb-6">
          Each month we pick a few breathtaking places were super excited about
          and use our connections to negotiate extraordinary vacation packages —
          exclusively for members. Offers so good, it’s like buying Bitcoin in
          2010.
        </p>
        <h3 className="text-2xl text-gray-800 mb-4">
          Enjoy The Royal Treatment
        </h3>
        <p className="text-gray-600 mb-4">
          With luxury inclusions throughout, youll vacay like you know the
          manager.
        </p>
        <h3 className="text-2xl text-gray-800 mb-4">
          Benefit from our contacts
        </h3>
        <p className="text-gray-600">
          It like getting friends & family rates without being related.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center md:block hidden">
        <div className="relative w-[500px] h-[300px] transform translate-x-[174px] -translate-y-28  ">
          <Image src={Ellipse} alt="Vacation Image" />
        </div>
      </div>
    </div>
  );
};

export default VipExclusive;
