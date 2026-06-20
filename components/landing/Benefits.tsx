'use client';

import * as React from 'react';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal, RevealWithStagger } from '../shared/Reveal';
import { Sun, Shield, Sparkles, Smile, RefreshCw, Layers } from 'lucide-react';

interface BenefitItem {
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BENEFITS: BenefitItem[] = [
  {
    category: "Professional & Personal",
    title: "Energetical Defense & Shielding",
    description: "Learn systematic techniques to construct elegant energetic boundaries around your personal space. Highly valuable for managers, healthcare workers, and counselors who routinely absorb ambient stress.",
    icon: Shield
  },
  {
    category: "Mental Balance",
    title: "Decongestion of Chronic Stress",
    description: "Practitioners master the ability to disintegrate cloud-like stress fields and negative thought-forms directly from the heart and emotional chakras. This fosters immediate cognitive space and steady focus.",
    icon: Smile
  },
  {
    category: "Personal Vitality",
    title: "Rapid Recharging Protocols",
    description: "Instead of relying on basic stimulants, learn how to draw wholesome vital prana safely from ambient environmental resources (sun, air, and ground) to refresh your personal battery when fatigued.",
    icon: Sun
  },
  {
    category: "Family & Care",
    title: "Accelerated Physical Restoration",
    description: "Master the exact recipes of scanning and cleansing to support rapid physical renewal for your children, elderly relatives, or personal clients, complimenting standard physiological treatments.",
    icon: RefreshCw
  },
  {
    category: "Spiritual Growth",
    title: "Enhanced Meditation Depth",
    description: "Applying subtle energy cleansing before meditation significantly lowers the volume of mental noise. Practitioners experience deeper states of stillness, inner clarity, and universal compassion.",
    icon: Sparkles
  },
  {
    category: "Energy Management",
    title: "Prevention of Vicarious Burnout",
    description: "By learning strict energy hygiene laws and safe disposal of pulled energy, practitioners maintain high spiritual and physical immunity, preventing them from developing secondhand physical complaints.",
    icon: Layers
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-[#FAF8F3]/50 border-t border-[#1E1B4B]/5 relative">
      <Container>
        
        <Reveal delay={0.1} yOffset={24}>
          <SectionHeading
            title="Sustain Your Vitality in a High-Demand World"
            subtitle="Educational Benefits"
            description="The study of Pranic Healing equips students with practical tools to govern their own vital fields. These techniques serve as structural assets to enrich focus, protect family wellness, and prevent spiritual fatigue."
            showGoldDivider
          />
        </Reveal>

        <RevealWithStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#1E1B4B]/10 p-6 sm:p-8 rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0F766E] mb-3 block">
                    {b.category}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#1E1B4B]/5 flex items-center justify-center text-[#1E1B4B]">
                      <Icon className="w-4 h-4 shrink-0" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1E1B4B]">
                      {b.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-6" />
              </div>
            );
          })}
        </RevealWithStagger>

      </Container>
    </section>
  );
}
