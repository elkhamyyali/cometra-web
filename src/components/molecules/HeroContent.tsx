// src/components/molecules/HeroContent.tsx

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

import Paragraph from "../atoms/Paragraph";

const HeroContent = () => (
  <div className="text-center max-w-lg">
    <Heading text="Comprehensive Expectations Travel" />
    <Paragraph text="With" />

    <div className="mt-6">
      <Button label="Explore Excusive" />
    </div>
  </div>
);

export default HeroContent;
