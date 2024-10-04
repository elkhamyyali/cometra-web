import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import RequestFormModal from "../molecules/PopUpFormRequest";
import CardImage from "../../../public/assets/unsplash_RAjND0B3HDw.png";
import SecondCardImage from "../../../public/assets/unsplash_Xdf6F6UCT_E.png";
interface CardComponentProps {
  activeFilters: Set<string>;
}

const CardComponent: React.FC<CardComponentProps> = ({ activeFilters }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardTitle, setSelectedCardTitle] = useState<string | null>(
    null
  );

  const cards = [
    {
      id: 1,
      category: "Category 1",
      content: "Maldives Dream Vacation",
      description:
        "Discover the enchanting Maldives, an archipelago renowned for its crystal-clear waters and idyllic white-sand beaches. Immerse yourself in vibrant coral reefs teeming with tropical marine life.",
      destination: "Maldives",
      duration: "7 days",
      language: "English",
      image: CardImage,
    },
    {
      id: 2,
      category: "Category 2",
      content: "Bali Cultural Experience",
      description:
        "Explore the rich culture and stunning landscapes of Bali. From ancient temples to lush rice terraces, experience the beauty and spirituality of this Indonesian paradise.",
      destination: "Bali",
      duration: "10 days",
      language: "English, Indonesian",
      image: SecondCardImage,
    },
  ];

  const filteredCards =
    activeFilters.size > 0
      ? cards.filter((card) => activeFilters.has(card.category))
      : cards;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleOpenModal = (title: string) => {
    setSelectedCardTitle(title);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container mx-auto">
      <RequestFormModal
        open={openModal}
        onClose={handleCloseModal}
        title={selectedCardTitle || "Details"}
      />

      {/* Desktop View */}
      <div className="hidden md:block">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8"
          >
            <div className="flex flex-row-reverse items-center">
              <div className="w-1/2 h-96 relative group overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.content}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                    onClick={() => handleOpenModal(card.content)}
                  >
                    Get Price
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-8">
                <Link href={`/exclusives/${card.id}`}>
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                    {card.category}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {card.content}
                  </h2>
                  <p className="mt-3 text-gray-600">{card.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Destination:</span>{" "}
                      {card.destination}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Duration:</span>{" "}
                      {card.duration}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Operated in:</span>{" "}
                      {card.language}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View with Slider */}
      {/* Mobile View without Slider */}
      <div className="md:hidden">
        <div className="flex flex-col items-center">
          {filteredCards.map((card) => (
            <div key={card.id} className="w-11/12 ">
              <div className="bg-white my-2 shadow-lg rounded-lg overflow-hidden">
                <div className="relative group overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.content}
                    width={400}
                    height={300}
                    className="w-full h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <button
                      className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                      onClick={() => handleOpenModal(card.content)}
                    >
                      Get Price
                    </button>
                  </div>
                </div>

                <div className="p-2">
                  <Link href={`/exclusives/${card.id}`}>
                    <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                      {card.category}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900">
                      {card.content}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {card.description}
                    </p>
                    <div className="mt-3 space-y-1">
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Destination:</span>{" "}
                        {card.destination}
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Duration:</span>{" "}
                        {card.duration}
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Operated in:</span>{" "}
                        {card.language}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
