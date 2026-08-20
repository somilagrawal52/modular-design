import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Globe, Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import ParallaxElement from '../components/ParallaxElement';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import Reveal from '../components/Reveal';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';
import Magnetic from '../components/Magnetic';
import { companyEmail, MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

const LOCATIONS = [
  {
    city: 'Geneva',
    address: 'Rue du Rhône 14, 1204 Geneva',
    phone: '+41 22 310 00 00',
    email: companyEmail('geneva'),
    timezone: 'Europe/Zurich',
    image: 'https://images.unsplash.com/photo-1581262177000-8139a463e531?auto=format&fit=crop&q=80&w=1000'
  },
  {
    city: 'London',
    address: '24 Savile Row, London W1S 3PR',
    phone: '+44 20 7946 0000',
    email: companyEmail('london'),
    timezone: 'Europe/London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000'
  },
  {
    city: 'New York',
    address: '150 Wooster St, New York, NY 10012',
    phone: '+1 212 555 0123',
    email: companyEmail('ny'),
    timezone: 'America/New_York',
    image: 'https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=1000'
  }
];

function LocalTime({ timezone }: { timezone: string }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: timezone, 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span>{time}</span>;
}

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <div className="bg-ink min-h-screen pt-40 relative overflow-hidden">
      <SEO 
        title="Contact Us" 
        description="Get in touch with COMPANY Studios. Whether you have a specific project in mind or simply wish to learn more about our practice, we invite you to reach out." 
      />

      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.05),transparent_70%)]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 relative z-10">
        {/* Hero Section */}
        <div className="mb-32">
          <ParallaxElement speed={0.02}>
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold font-mono text-xs">04</span>
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">Contact</span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="DIALOGUE OF VISION."
              className="text-[12vw] md:text-[10vw] font-display font-bold tracking-tighter leading-[0.8] mb-12"
              delay={0.2}
              stagger={0.08}
            />
            <div className="max-w-3xl">
              <StaggerText
                text="Architecture is a conversation between the site, the client, and the architect. We invite you to begin that dialogue with us."
                className="text-2xl text-ivory/70 font-light leading-relaxed italic font-serif"
                delay={0.8}
                stagger={0.02}
              />
            </div>
          </ParallaxElement>
        </div>

        {/* Split Section: Form & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
          <div className="lg:col-span-6">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-stone/5 p-8 md:p-16 border border-stone/10 relative backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/20" />
                <h2 className="text-3xl font-display font-bold mb-16 tracking-tight">START A CONVERSATION</h2>
                
                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Julian Aurelian"
                        className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Email Address</label>
                      <input 
                        type="email" 
                        placeholder={companyEmail('studio')}
                        className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Inquiry Type</label>
                    <div className="flex flex-wrap gap-4">
                      {['Modular Home', 'Commercial Container', 'Hospitality', 'Pools & Amenities', 'Press'].slice(0, MANAGER_DEMO_MODE ? 3 : undefined).map((type) => (
                        <button
                          key={type}
                          type="button"
                          className="px-6 py-2 border border-stone/20 rounded-full text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Your Vision</label>
                    <textarea 
                      placeholder="Describe the essence of your project..."
                      rows={4}
                      className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light resize-none"
                    />
                  </div>

                  <Magnetic strength={0.2}>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-8 bg-gold text-ink uppercase tracking-[0.5em] font-bold text-[10px] flex items-center justify-center gap-6 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Initialize Dialogue</span>
                      <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    </motion.button>
                  </Magnetic>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative hidden lg:block">
            <ParallaxElement speed={-0.05} className="h-full">
              <div className="relative h-full overflow-hidden border border-stone/10 p-4 bg-stone/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLocation}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={LOCATIONS[activeLocation].image}
                      alt={LOCATIONS[activeLocation].city}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ink/40" />
                    
                    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Current Focus</span>
                        <h3 className="text-5xl font-display font-bold tracking-tighter">{LOCATIONS[activeLocation].city}</h3>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gold mb-2 justify-end">
                          <Clock size={14} />
                          <span className="text-xs font-mono"><LocalTime timezone={LOCATIONS[activeLocation].timezone} /></span>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-ivory/60">Local Studio Time</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* Global Studios Section */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <Reveal direction="right">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none">GLOBAL STUDIOS.</h2>
            </Reveal>
            <Reveal direction="left">
              <p className="text-ivory/40 uppercase tracking-[0.4em] text-[10px] font-bold max-w-xs text-right">
                Strategically positioned to orchestrate projects across continents.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {demoItems(LOCATIONS, LOCATIONS.slice(0, 2)).map((loc, i) => (
              <div key={loc.city} className="h-full">
                <Magnetic strength={0.1} className="h-full">
                  <motion.div
                    onMouseEnter={() => setActiveLocation(i)}
                    className={`group p-12 border transition-all duration-700 cursor-pointer h-full ${
                      activeLocation === i ? 'bg-stone/5 border-gold/30' : 'border-stone/10 hover:border-gold/20'
                    }`}
                  >
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-4xl font-display font-bold text-gold/20 group-hover:text-gold transition-colors duration-500">0{i + 1}</span>
                    <div className="flex items-center gap-2 text-gold/40 group-hover:text-gold transition-colors">
                      <Clock size={12} />
                      <span className="text-[10px] font-mono"><LocalTime timezone={loc.timezone} /></span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-8 tracking-tight">{loc.city}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group/item">
                      <MapPin size={14} className="text-gold/40 mt-1" />
                      <p className="text-sm text-ivory/60 font-light leading-relaxed">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-4 group/item">
                      <Phone size={14} className="text-gold/40" />
                      <p className="text-sm text-ivory/60 font-light">{loc.phone}</p>
                    </div>
                    <div className="flex items-center gap-4 group/item">
                      <Mail size={14} className="text-gold/40" />
                      <p className="text-sm text-ivory/60 font-light">{loc.email}</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-stone/10 flex justify-between items-center">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-ivory/40 font-bold">Studio Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                      <span className="text-[8px] uppercase tracking-[0.4em] text-gold font-bold">Active</span>
                    </div>
                  </div>
                </motion.div>
              </Magnetic>
            </div>
            ))}
          </div>
        </div>

        {/* FAQ / Direct Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pb-32">
          <Reveal direction="right">
            <div className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.5em] text-gold font-bold">Direct Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: 'New Projects', email: companyEmail('projects') },
                  { label: 'Press Inquiries', email: companyEmail('press') },
                  { label: 'Career Opportunities', email: companyEmail('careers') },
                  { label: 'General Info', email: companyEmail('studio') }
                ].slice(0, MANAGER_DEMO_MODE ? 2 : undefined).map((item) => (
                  <div key={item.label} className="group">
                    <h4 className="text-[10px] uppercase tracking-widest text-ivory/40 mb-2">{item.label}</h4>
                    <a href={`mailto:${item.email}`} className="text-lg font-light hover:text-gold transition-colors">{item.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="bg-gold/5 p-12 border border-gold/10">
              <Globe className="text-gold mb-8" size={32} />
              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight">GLOBAL OPERATIONS</h3>
              <p className="text-ivory/60 font-light leading-relaxed mb-8">
                COMPANY operates as a unified global practice. Our studios in Geneva, London, and New York work in seamless orchestration, ensuring that every project benefits from our collective intelligence and diverse cultural perspectives.
              </p>
              <div className="flex gap-8">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold hover:text-ivory transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
