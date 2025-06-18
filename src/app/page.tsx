import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <About />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
