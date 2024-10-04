import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cardData } from "../../../data"; // Adjust the import path as needed
import logoImage from "../../../public/assets/TranslatedLogo.png"; // Adjust path as needed

const SecondSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const getLogoRotationForLaptop = () => {
    switch (activeCard) {
      case 1:
        return "rotate(-45deg)";
      case 2:
        return "rotate(-105deg)";
      case 3:
        return "rotate(45deg)";
      case 4:
        return "rotate(105deg)";
      default:
        return "rotate(0deg)";
    }
  };

  const getLogoRotationForMobile = () => {
    return `rotate(${scrollY * 0.2}deg)`; // Adjust the factor to control rotation speed
  };

  return (
    <section className="py-12 px-6  lg:px-28 bg-[#EBF9FB]">
      {/* Logo Section - Mobile */}
      <div className="flex justify-center mb-2 lg:hidden">
        <div
          style={{
            transform: getLogoRotationForMobile(),
            transition: "transform 0.2s ease-out",
          }}
        >
          <Image
            src={logoImage}
            alt="Logo"
            width={150}
            height={150}
            className="w-48 h-48"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:mb-12 mb-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-dinCondensed mb-4 text-[#4ADFDF]">
          Travel is
        </h2>
        <p className="text-base md:text-2xl font-bold lg:text-3xl text-[#1730A5]">
          More than just a journey
        </p>
      </div>

      {/* Flex Layout for Cards */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {/* First Column with Two Cards */}
        <div className="flex flex-col space-y-8 w-full">
          {cardData.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="bg-[#FBFBFB] border border-transparent w-full rounded-lg lg:p-2 p-4 transition-all duration-300 hover:border-blue-500"
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex p-1 items-center mb-2">
                <card.icon className="text-2xl mr-2 text-[#0C1D6D]" />
                <h3 className="text-lg md:text-xl font-semibold text-[#0C1D6D]">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm p-1 md:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Logo - Visible on Laptop only */}
        {/* Logo - Visible on Laptop only */}
        <div className="hidden lg:flex items-start justify-center relative mt-[-45px]">
          <div
            style={{
              transform: getLogoRotationForLaptop(),
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src={logoImage}
              alt="Logo"
              width={150}
              height={150}
              className="md:w-1/2 lg:w-auto"
            />
          </div>
        </div>

        {/* Second Column with Two Cards */}
        <div className="flex flex-col space-y-8 w-full">
          {cardData.slice(2).map((card) => (
            <div
              key={card.id}
              className="bg-[#FBFBFB] border border-transparent w-full rounded-lg lg:p-2 p-4 transition-all duration-300 hover:border-blue-500"
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex p-1 items-center mb-2">
                <card.icon className="text-2xl mr-2 text-[#0C1D6D]" />
                <h3 className="text-lg md:text-xl font-semibold text-[#0C1D6D]">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm p-1 md:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
