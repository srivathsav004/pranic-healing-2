'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { faqData } from '../../data/faq';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIds, setOpenIds] = React.useState<Set<string>>(new Set([faqData[0].id]));

  const toggleAccordion = (id: string) => {
    const next = new Set(openIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setOpenIds(next);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F3]/50 border-t border-[#1E1B4B]/5 relative">
      <Container className="max-w-4xl">
        
        {/* Section Heading */}
        <Reveal delay={0.1} yOffset={24}>
          <SectionHeading
            title="Curriculum & Technical FAQ"
            subtitle="Understand the Science"
            description="Explore standard answers regarding the structural procedures, workshop expectations, and complementary application guidelines of Pranic Healing."
            showGoldDivider
          />
        </Reveal>

        {/* Accordion Group */}
        <div className="space-y-4 mt-12">
          {faqData.map((item, idx) => {
            const isOpen = openIds.has(item.id);
            return (
              <Reveal key={item.id} delay={idx * 0.05} yOffset={15}>
                <div className="bg-[#FAF8F3] border border-[#1E1B4B]/10 rounded-sm overflow-hidden transition-colors hover:border-[#1E1B4B]/20">
                  {/* Trigger Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:bg-[#1E1B4B]/3"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                      <span className="font-serif text-sm sm:text-base font-semibold text-[#1E1B4B] leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#1E1B4B]/5 flex items-center justify-center text-[#1E1B4B] shrink-0 mt-0.5 group-hover:bg-[#1E1B4B]/10">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#1E1B4B]/5">
                          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl pl-8 pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
