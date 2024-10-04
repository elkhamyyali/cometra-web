import FourSection from "@/components/organisms/FourSection";
import HeroSection from "@/components/organisms/HeroSection";
import OurClients from "@/components/organisms/OurClients";
import SecondSection from "@/components/organisms/SecondSection";
import ThirdSection from "@/components/organisms/ThirdSection";
import React from "react";

type Props = {};

const COMETRA = (props: Props) => {
  return (
    <div className="">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <OurClients />
    </div>
  );
};

export default COMETRA;
