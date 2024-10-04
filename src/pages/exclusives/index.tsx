// FilterAndCards.tsx
import React, { useState } from "react";
import ImageGallery from "@/components/organisms/ImageGallery";
import CardComponent from "@/components/organisms/ExclusivesCard";

const FilterAndCards: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const handleFilterChange = (category: string) => {
    setActiveFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);
      if (newFilters.has(category)) {
        newFilters.delete(category);
      } else {
        newFilters.add(category);
      }
      return newFilters;
    });
  };

  return (
    <div className="bg-[#F7F7F9] lg:px-16 lg:py-6 py-4">
      <h3 className="ml-4 text-[#0C1D6D] font-bold text-2xl">
        Choose Your Trip
      </h3>
      <ImageGallery
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
      />
      <h3 className="ml-4 my-4 text-[#0C1D6D] font-bold text-2xl">
        VIP Exclusives
      </h3>
      <CardComponent activeFilters={activeFilters} />
    </div>
  );
};

export default FilterAndCards;
