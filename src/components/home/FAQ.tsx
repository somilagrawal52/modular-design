import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';

const faqs = [
  {
    question: 'What makes a capsule space different from a traditional building?',
    answer: 'Capsule spaces combine a compact prefabricated structure with panoramic living and a fast, low-impact delivery approach. The result is a carefully detailed room that can be suited to hospitality, work, wellness, or residential use.',
  },
  {
    question: 'Can I customise the layout and finishes?',
    answer: 'Configuration options vary by selected model and manufacturer. The available layout, finish, glazing, furniture, service, and exterior choices should be confirmed against the chosen model and your brief.',
  },
  {
    question: 'What technology is included in a capsule project?',
    answer: 'Technology varies by model. The reference manufacturers used in this collection describe factory-built systems with an insulated enclosure, glazing, electrical and plumbing provisions, and optional equipment. The final scope should always be confirmed for the selected model.',
  },
  {
    question: 'Can I experience a capsule before committing?',
    answer: 'Relevant imagery, product information, finish references, and available drawings can be reviewed for the selected model before you make a decision. Demonstration access depends on the model and location.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'The schedule depends on the selected model, configuration, site access, shipping route, and installation logistics. A model-specific fabrication and delivery programme should be confirmed before an order is placed.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Warranty coverage, scope, duration, and responsible parties should be set out in the selected-model specification and final agreement before work begins.',
  },
  {
    question: 'How do you maintain quality and safety?',
    answer: 'The chosen model, site access, foundations, lifting requirements, and local compliance need to be reviewed together before installation. These requirements are specific to the selected model and project location.',
  },
  {
    question: 'What support is available after installation?',
    answer: 'Maintenance, service, and upgrade support should be agreed with the relevant supplier or delivery partner as part of the selected-model proposal.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 md:py-48 px-8 relative overflow-hidden border-t border-white/5">
      <div className="absolute -right-[5vw] top-16 text-[22vw] font-display font-bold tracking-tighter leading-none text-ivory/[0.025] pointer-events-none select-none">
        FAQ
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 id="faq-heading" className="sr-only">Frequently asked questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-gold font-mono text-xs">04</span>
                <div className="h-px w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">Knowledge</span>
              </div>
            </Reveal>

            <StaggerText
              el="h2"
              text="QUESTIONS, ANSWERED."
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.88]"
              delay={0.1}
              stagger={0.05}
            />

            <Reveal direction="right" delay={0.3}>
              <p className="mt-10 max-w-sm text-base md:text-lg leading-relaxed text-ivory/60 font-light">
                A practical guide to starting a modular or capsule-space project.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pt-2">
            <div className="border-t border-white/15">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <Reveal key={faq.question} direction="up" delay={Math.min(index * 0.04, 0.24)}>
                    <div className="border-b border-white/15">
                      <button
                        type="button"
                        className="w-full flex items-center gap-5 md:gap-8 py-6 md:py-8 text-left group"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span className="w-7 shrink-0 text-[10px] font-mono text-gold/80">{String(index + 1).padStart(2, '0')}</span>
                        <span className="flex-1 text-lg md:text-2xl font-display font-medium tracking-tight text-ivory group-hover:text-gold transition-colors duration-300">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0 text-gold"
                        >
                          <ChevronDown size={20} strokeWidth={1.5} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={answerId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-7 md:pb-9 pl-12 md:pl-16 max-w-2xl text-base md:text-lg leading-relaxed text-ivory/65 font-light">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
