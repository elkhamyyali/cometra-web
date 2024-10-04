import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBackgroundImage from "../../../public/assets/unsplash_RAjND0B3HDw.png";
import SlideImage1 from "../../../public/assets/unsplash_Xdf6F6UCT_E.png";
import SlideImage2 from "../../../public/assets/product card photo.png";

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-cyan-600 text-white rounded-full p-2 md:left-4 lg:left-6 xl:left-8"
    style={{ left: "10px" }} // Custom left position for mobile
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-cyan-600 text-white rounded-full p-2 md:right-4 lg:right-6 xl:right-8"
    style={{ right: "10px" }} // Custom right position for mobile
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const ImageSliderComponent: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false, // Disable default arrows
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay
    autoplaySpeed: 3000, // Set autoplay speed
  };

  // Array of image sources
  const slideImages = [SlideImage1, SlideImage2];

  // Initialize Fancybox after component mounts
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Add options if needed
    });
  }, []);

  return (
    <div className="relative w-full h-[384px] md:h-[379px] flex items-center">
      {/* Background Image */}
      <Image
        src={HeroBackgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Slider Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center max-w-5xl mx-auto px-4">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {slideImages.map((image, index) => (
            <a
              href={image.src} // Use the image source as the href for Fancybox
              data-fancybox="gallery" // Group the images in a Fancybox gallery
              key={index}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1050}
                height={500}
                className="rounded-none object-cover h-[300px] md:h-[384px]"
              />
            </a>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
};

export default ImageSliderComponent;
