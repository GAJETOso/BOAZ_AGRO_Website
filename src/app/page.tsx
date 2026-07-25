import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Divisions from "../components/Divisions";
import Agritech from "../components/Agritech";
import Exports from "../components/Exports";
import Logistics from "../components/Logistics";
import Circularity from "../components/Circularity";
import Why from "../components/Why";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Divisions />
      <Agritech />
      <Exports />
      <Logistics />
      <Circularity />
      <Why />
      <Contact />
      <Footer />
    </>
  );
}
