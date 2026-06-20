'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';

export function AboutPranicHealing() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F3] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Elegant Images */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center">
            <Reveal delay={0.2} yOffset={30} className="w-full relative">
              <div className="grid grid-cols-12 gap-4">
                {/* Image 1: Cleansing representation */}
                <div className="col-span-8 relative aspect-[4/5] rounded-sm overflow-hidden border border-[#1E1B4B]/10 shadow-lg">
                  <Image
                    src="https://picsum.photos/seed/healing-flow/700/875"
                    alt="Therapeutic relaxation setting demonstrating energy alignment"
                    fill
                    sizes="(max-w-7xl) 100vw, 400px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Image 2: Crystal or meditation details, offset */}
                <div className="col-span-4 relative flex items-end">
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border-2 border-[#FAF8F3] shadow-2xl -translate-x-6 sm:-translate-x-12 translate-y-6">
                    <Image
                      src="https://picsum.photos/seed/pranic-crystal/400/533"
                      alt="Subtle visual of nature and clear water representando prana"
                      fill
                      sizes="(max-w-7xl) 100vw, 200px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Structured callout quote below imagery */}
            <Reveal delay={0.4} yOffset={20} className="mt-12 text-left w-full pl-6 border-l-2 border-[#D4AF37]">
              <p className="font-serif italic text-base sm:text-lg text-[#1E1B4B] leading-relaxed">
                &ldquo;According to Pranic Healing, the physical body and the energy body are interconnected. Imbalances in the vital field frequently manifest prior to physical symptoms.&rdquo;
              </p>
              <span className="font-sans text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2 block">
                — Synthesis of Energy Anatomy
              </span>
            </Reveal>
          </div>

          {/* Right Column: Educational Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal delay={0.1} yOffset={20}>
              <SectionHeading
                title="A Highly Structured Approach to Subtle Vitality"
                subtitle="Preserving the Teachings"
                align="left"
                className="mb-8"
              />
            </Reveal>

            <Reveal delay={0.2} yOffset={20} className="space-y-6 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              <p className="font-serif italic text-lg sm:text-xl text-[#1E1B4B] leading-relaxed border-b border-[#1E1B4B]/5 pb-6">
                Pranic Healing is an energy hygiene system synthesized by Grandmaster Choa Kok Sui. Through structured, non-touch steps, practitioners learn to assess, purify, and augment the subtle vital field.
              </p>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1E1B4B]/5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1E1B4B]">No Physical Touch</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Practitioners operate strictly on the subtle bioplasmic body or aura, preventing physical contact guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1E1B4B]">Rigorous Cleanse First</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Teaches that cleansing must precede energizing to avoid locking stale, toxic fields inside the body systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1E1B4B]">Strict Energy Hygiene</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Equips practitioners with personal defense habits to discharge dirty fields and protect their own families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] shrink-0 mt-0.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1E1B4B]">Fully Complementary</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Explicitly designed to run parallel to modern medical science, never replacing professional healthcare.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
