// src/components/atoms/Paragraph.tsx
const Paragraph = ({ text }: { text: string }) => (
  <div>
    <p className="text-2xl md:text-3xl mb-2 mt-4 text-[#4ADFDF]">{text}</p>
    <p className="font-extrabold text-white md:text-3xl text-2xl">COMETRA</p>
  </div>
);

export default Paragraph;
