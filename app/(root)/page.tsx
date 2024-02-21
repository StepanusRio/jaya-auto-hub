import About from "./_components/About";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Kualitas from "./_components/Kualitas";
import Services from "./_components/Services";
import Sponsor from "./_components/Sponsor";

const HomePage = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Kualitas />
        <About />
        <Sponsor />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
