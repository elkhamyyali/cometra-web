// src/components/templates/MainLayout.tsx
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
