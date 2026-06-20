'use client';

import * as React from 'react';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal, RevealWithStagger } from '../shared/Reveal';
import { Heart, Activity, RefreshCw, Layers, Shield, Sparkles } from 'lucide-react';

interface PrincipleItem {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    num: "01",
    title: "Self-Recovery",
    description: "The foundational law that states every living organism has the innate biophysical capacity to heal itself. Pranic protocols are designed to optimize and trigger this pre-existing natural blueprint.",
    icon: Heart,
    accentColor: "border-l-[#0F766E]"
  },
  {
    num: "02",
    title: "Force Acceleration",
    description: "Healing is accelerated when life energy (prana) is introduced. By increasing the volume and quality of prana in depleted areas, the biological rate of tissue restoration is greatly increased.",
    icon: Activity,
    accentColor: "border-l-[#5B21B6]"
  },
  {
    num: "03",
    title: "Cleansing First",
    description: "Teaches that stale or congested energy must be completely extracted before fresh energy is projected. Energizing without previous cleansing is believed to trap toxic materials in the system.",
    icon: RefreshCw,
    accentColor: "border-l-[#D4AF37]"
  },
  {
    num: "04-B",
    title: "Energy Interconnection",
    description: "The outer physical body is deeply coupled to its energetic blueprint containing the aura. What affects one immediately resonates with and alters the state of the other.",
    icon: Layers,
    accentColor: "border-l-slate-400"
  },
  {
    num: "05",
    title: "Character Alignment",
    description: "A unique cornerstone focusing on meditation, mental hygiene, and ethical development. Relieving stress and negative thought patterns prevents energetic blocks from reforming.",
    icon: Shield,
    accentColor: "border-l-indigo-700"
  },
  {
    num: "06",
    title: "Sistematic Formulas",
    description: "The system is formulated like an engineering science. Specific chakras, organs, and meridians are addressed using distinct colors, exposure duration, and structural steps.",
    icon: Sparkles,
    accentColor: "border-l-[#0F766E]"
  }
];

export function KeyPrinciples() {
  return (
    <section id="principles" className="py-20 sm:py-28 bg-[#FAF8F3] relative">
      
      {/* Background visual detail */}
      <div className="absolute top-[30%] left-0 w-36 h-96 bg-[#D4AF37]/5 rounded-r-full blur-3xl pointer-events-none" />

      <Container>
        <Reveal delay={0.1} yOffset={24}>
          <SectionHeading
            title="The Six Columns of Pranic Science"
            subtitle="The Mechanics of Vitality"
            description="The teachings formulated by Grandmaster Choa Kok Sui rest on consistent, replicable laws of nature that determine how consciousness and biological entities process subtle life force."
            showGoldDivider
          />
        </Reveal>

        <RevealWithStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`bg-[#FAF8F3] border border-[#1E1B4B]/10 p-6 sm:p-8 rounded-sm hover:shadow-[0_12px_40px_rgba(30,27,75,0.04)] hover:border-[#1E1B4B]/20 transition-all duration-300 relative group flex flex-col justify-between border-l-4 ${p.accentColor}`}
              >
                <div>
                  {/* Card Header (Num + Icon) */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#1E1B4B]/40">
                      {p.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#1E1B4B]/3 flex items-center justify-center text-[#1E1B4B] group-hover:bg-[#1E1B4B] group-hover:text-[#FAF8F3] transition-colors duration-300">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                  </div>

                  {/* Body */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1E1B4B] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="w-8 h-1 bg-[#D4AF37]/20 mt-6 group-hover:bg-[#D4AF37] transition-colors" />
              </div>
            );
          })}
        </RevealWithStagger>
      </Container>
    </section>
  );
}
