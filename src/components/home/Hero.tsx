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
    <section className="relative min-h-[600px] sm:min-h-[680px] h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/45 to-ink/90 z-10" />
        <img
          src="/images/modular-home-garden-hero.jpg"
          alt="Contemporary modular home in a garden"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 w-full text-center px-5 sm:px-8 pt-20">
        <motion.div className="w-full" style={{ transform }}>
          <Reveal delay={0.2}>
            <div
              className={
                MANAGER_DEMO_MODE
                  ? "hidden"
                  : "flex items-center justify-center gap-4 mb-10"
              }
            >
              <div className="h-[1px] w-8 md:w-12 bg-gold/40" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.12em] text-gold font-semibold">
                Premium space capsules · modular living solutions
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-gold/40" />
            </div>
          </Reveal>

          <h1 className="mx-auto max-w-6xl font-display font-semibold leading-[1] tracking-[-0.03em] mb-7 md:mb-9">
            <span className="block text-[clamp(2.625rem,6vw,5.125rem)] text-ivory text-balance">
              Turning Dreams into Reality
            </span>
            <span className="mt-3 block text-[clamp(1.35rem,3vw,2.75rem)] font-medium tracking-[-0.03em] text-gold text-balance">
              {" "}
              Breaking the Imagination Barriers
            </span>
          </h1>

          <div className="max-w-[36rem] mx-auto">
            <StaggerText
              text={`${SITE_NAME}(DVR) presents premium capsule models and modular living solutions for hospitality, resorts, commercial developments, and private projects.`}
              className="text-base md:text-lg text-ivory/85 font-light tracking-[0.005em] leading-relaxed"
              delay={1.2}
              stagger={0.02}
            />
          </div>

          <Reveal delay={1.45}>
            <Link
              to="/work"
              className="group mt-8 md:mt-10 inline-flex min-h-12 items-center gap-4 border border-gold/55 px-6 py-3 text-xs uppercase tracking-[0.1em] font-semibold text-ivory transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              Explore models
              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </motion.div>
      </div>

    </section>
  );
}
