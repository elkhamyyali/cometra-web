import Faqs from "@/components/molecules/Faqs";
import GoodToKnow from "@/components/molecules/GoodToKnow";
import ProgramDetails from "@/components/molecules/ProgramDetails";
import TripClients from "@/components/molecules/TripClients";
import TripTitle from "@/components/molecules/TripTitle";
import TripVideo from "@/components/molecules/TripVideo";
import BottomBar from "@/components/organisms/BottomBar";
import ImageSliderComponent from "@/components/organisms/ImageSliderComponent";
import React from "react";

type Props = {};

const DetailsTrip = (props: Props) => {
  return (
    <div>
      <div className="lg:px-0">
        <ImageSliderComponent />
      </div>
      <div className="lg:px-16">
        <TripTitle />
        <ProgramDetails />
        <GoodToKnow />
        <TripVideo />
        <Faqs />
        <TripClients />
        <BottomBar />
      </div>
    </div>
  );
};

export default DetailsTrip;
