import { motion, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';
import { useEffect } from 'react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [0, 2000], [-20, 20]);
  const moveY = useTransform(springY, [0, 1000], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const transform = useMotionTemplate`translate3d(${moveX}px, ${moveY}px, 0)`;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink z-10" />
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000"
          alt="Architectural Detail"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-8">
        <motion.div style={{ transform }}>
          <Reveal delay={0.2}>
            <div className="hidden">
              <div className="h-[1px] w-12 bg-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">
                Est. 1998 — Geneva
              </span>
              <div className="h-[1px] w-12 bg-gold/40" />
            </div>
          </Reveal>
          
          <StaggerText
            el="h1"
            text="THE POETRY OF SPACE."
            className="text-[13vw] md:text-[11vw] font-display font-bold leading-[0.8] tracking-tighter mb-12"
            delay={0.4}
            stagger={0.08}
          />

          <div className="max-w-2xl mx-auto">
            <StaggerText
              text="AURELIAN is a global practice dedicated to the orchestration of light, shadow, and material. We create structures that resonate with the human spirit."
              className="text-lg md:text-xl text-ivory/70 font-light tracking-wide leading-relaxed italic font-serif"
              delay={1.2}
              stagger={0.02}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Explore below</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
