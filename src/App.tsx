import { JSX } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}
