import { DotBackgroundDemo } from './components/ui/dot-background';
import Navbar from './components/Navbar';
import Hero from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <DotBackgroundDemo className="min-h-screen w-full">
      <div className="pt-24">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </DotBackgroundDemo>
  );
}