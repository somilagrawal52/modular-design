import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import FeaturedWork from '../components/home/FeaturedWork';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import FAQ from '../components/home/FAQ';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="relative">
      <SEO 
        title="Modular Architecture & Design" 
        description="Modular homes, commercial container spaces, and landscape-ready amenities designed for flexible modern living." 
      />
      <Hero />
      <CinematicSection>
        <Philosophy />
      </CinematicSection>
      <CinematicSection>
        <FeaturedWork />
      </CinematicSection>
      <CinematicSection>
        <Services />
      </CinematicSection>
      <CinematicSection>
        <FAQ />
      </CinematicSection>
      <CinematicSection>
        <Contact />
      </CinematicSection>
    </div>
  );
}
