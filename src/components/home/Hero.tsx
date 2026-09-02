import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import StaggerText from "../StaggerText";
import { MANAGER_DEMO_MODE, SITE_NAME } from "../../config/siteMode";

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
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const transform = useMotionTemplate`translate3d(${moveX}px, ${moveY}px, 0)`;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink z-10" />
        <img
          src="/images/modular-home-garden-hero.jpg"
          alt="Contemporary modular home in a garden"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-8">
        <motion.div style={{ transform }}>
          <Reveal delay={0.2}>
            <div
              className={
                MANAGER_DEMO_MODE
                  ? "hidden"
                  : "flex items-center justify-center gap-4 mb-10"
              }
            >
              <div className="h-[1px] w-8 md:w-12 bg-gold/40" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.28em] md:tracking-[0.42em] text-gold font-bold">
                Premium space capsules · modular living solutions
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-gold/40" />
            </div>
          </Reveal>

          <h1 className="font-display font-semibold leading-[0.96] tracking-[-0.055em] mb-9">
            <span className="block whitespace-nowrap text-[clamp(1.35rem,5.7vw,6.5rem)] text-ivory">Turning Dreams into Reality</span>
            <span className="mt-3 block whitespace-nowrap text-[clamp(0.9rem,3.25vw,3.6rem)] font-medium tracking-[-0.035em] text-gold">- Breaking the Imagination Barriers</span>
          </h1>

          <div className="max-w-2xl mx-auto">
            <StaggerText
              text={`${SITE_NAME} presents premium capsule models and modular living solutions for hospitality, resorts, commercial developments, and private projects.`}
              className="text-base md:text-lg text-ivory/75 font-light tracking-[0.01em] leading-relaxed"
              delay={1.2}
              stagger={0.02}
            />
          </div>

          <Reveal delay={1.45}>
            <Link to="/work" className="group mt-10 inline-flex items-center gap-4 border border-gold/45 px-6 py-4 text-[10px] uppercase tracking-[0.28em] font-bold text-ivory transition-colors duration-500 hover:bg-gold hover:text-ink">
              Explore models
              <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={
          MANAGER_DEMO_MODE
            ? "hidden"
            : "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        }
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">
          Explore below
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
