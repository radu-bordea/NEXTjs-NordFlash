import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stack from "../components/Stack";
import Packages from "../components/Packages";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="w-full px-4 md:px-8">
      <NavBar />
      <Hero />
      <Services />
      <Stack />
      {/* <Packages />
      <Work />
      <About />
      <Contact /> */}
      <Footer />
    </main>
  );
}
