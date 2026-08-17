import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import FeaturedWork from '../components/home/FeaturedWork';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="relative">
      <SEO 
        title="Architecture & Design" 
        description="AURELIAN Studios is an award-winning architectural practice dedicated to creating timeless, sustainable, and visionary spaces." 
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
        <Contact />
      </CinematicSection>
    </div>
  );
}
