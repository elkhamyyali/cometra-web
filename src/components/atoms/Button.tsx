// src/components/atoms/Button.tsx
const Button = ({ label }: { label: string }) => (
  <button className="px-6 py-3 font-dinCondensed text-lg bg-[#1730A5] text-white  rounded-md shadow-md hover:bg-blue-600 transition">
    {label}
  </button>
);

export default Button;
