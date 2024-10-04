import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "../../../public/assets/unsplash_Xdf6F6UCT_E.png";

const imageList = [
  {
    src: Product1,
    alt: "Product 1",
  },
  {
    src: Product1,
    alt: "Product 2",
  },
  {
    src: Product1,
    alt: "Product 3",
  },
];

const FourSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />,
  };

  return (
    <div className="flex flex-wrap lg:px-40 max-w-full mx-auto justify-around p-6 bg-[#EBF9FB]">
      {/* Slider Section */}
      <div className="w-full md:w-2/5  lg:w-[400px] h-80 lg:h-[340px] border-[10px] rounded-2xl border-black ">
        <Slider {...settings}>
          {imageList.map((image, index) => (
            <div key={index} className="relative lg:h-[321px] h-[300px]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/5 lg:w-3/5 p-4 md:p-6">
        <p className="font-dinCondensed text-[#4ADFDF] text-lg">Cometra</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0C1D6D]">
          VIP Exclusives™: Your Backstage Pass to Vacation Like Us
        </h2>
        <p className="text-gray-700 mb-6">
          Each month we pick a few breathtaking places were super excited about
          and use our connections to negotiate extraordinary vacation packages –
          exclusively for members. Offers so good, its like buying Bitcoin in
          2010.
        </p>
        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-lg text-[#0C1D6D] mb-2">
              Enjoy The Royal Treatment
            </h3>
            <p className="text-gray-700">
              With luxury inclusions throughout, youll vacay like you know the
              manager.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#0C1D6D] mb-2">
              Benefit from Our Contacts
            </h3>
            <p className="text-gray-700">
              Its like getting friends & family rates without being related.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrevArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
};

const NextArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
};

export default FourSection;
