import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container-fluid py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};