import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Services from "./components/Services";
import Conversion from "./components/Conversion";
import Professionals from "./components/Professionals";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Conversion />
        <Professionals />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
