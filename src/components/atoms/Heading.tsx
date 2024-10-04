// src/components/atoms/Heading.tsx
const Heading = ({ text }: { text: string }) => (
  <h1 className="text-4xl md:text-nowrap text-center flex items-center justify-center md:text-5xl lg:text-5xl font-dinCondensed text-white leading-tight">
    {text}
  </h1>
);

export default Heading;
