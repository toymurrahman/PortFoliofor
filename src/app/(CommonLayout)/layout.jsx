import Footer from "@/src/components/shared/Footer/Footer";
import Navbar from "@/src/components/shared/Navbar/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
