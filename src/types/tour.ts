// types/tour.ts

export interface TourPackage {
 
  id: number;
  name: string;
  title: string;
  destination: string;
  price: number;
  starRating: number;
  amenities: string[];
  accommodationType: string;
  main_image: string;
  description?: string;
  duration: number;
  age_range: string;
  language: string;
  min_price: number;
  location?: string; // Optional property
  rating?: number; // Optional property
  is_best_deal?: number; // Optional property
  // Add any other properties that are used in the components
}

export interface PricePlan {
  name: string;
  price: string;
}

export interface PricePlanDetail {
  title: string;
  from_month: string;
  to_month: string;
  prices: PricePlan[];
}

export interface TourIncludeItem {
  status: "yes" | "no"; // or use boolean if you prefer
  title: string;
  description: string;
}

export interface TourItineraryItem {
  title: string;
  description: string;
  duration: string;
}

export interface TourDetail extends TourPackage {
  tags?: string[]; // Optional property
  min_price: number;
  description: string;
  images: string[];
  num_of_cities?: number;
  num_of_places?: number;
  category?: {
    name?: string;
  };
  run?: string;
  transportation_mode: string;
  tour_prices: PricePlanDetail[]; // Ensure this is always an array
  tour_includes?: TourIncludeItem[]; // Adjusted to match the component's usage
  tour_itineraries?: TourItineraryItem[]; // Added to match the component's usage
  tour_frequently_questions?: {
    question: string;
    answer: string;
  }[];
}

// Update ToursData to reflect that it includes `data` property
export interface ToursData {
  data: TourPackage[];
}
