// src/components/atoms/Logo.tsx
import Image from "next/image";
import CometraLogo from "../../../public/assets/Logo.png";

const Logo = () => (
  <div className="flex items-center">
    <Image
      src={CometraLogo}
      alt="Logo"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>
);

export default Logo;
