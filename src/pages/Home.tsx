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
        title="Premium Space Capsule & Modular Living Solutions"
        description="Premium space capsules and modular living solutions designed for hospitality, resorts, commercial developments and private projects."
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
