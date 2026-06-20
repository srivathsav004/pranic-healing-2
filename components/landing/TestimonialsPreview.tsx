'use client';

import * as React from 'react';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal, RevealWithStagger } from '../shared/Reveal';
import { testimonialsData } from '../../data/testimonials';
import { Star, Quote, Building2 } from 'lucide-react';

export function TestimonialsPreview() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F3] relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#5B21B6]/2 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        
        {/* Section Heading */}
        <Reveal delay={0.1} yOffset={24}>
          <SectionHeading
            title="Insights from Our Global Community"
            subtitle="Student Case Perspectives"
            description="Our students represent a diverse cross-section of professionals, including integrative physicians, engineering directors, educators, and creative designers. Read how subtle energy training reshaped their vitality."
          />
        </Reveal>

        {/* Columns Grid */}
        <RevealWithStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#FAF8F3] border border-[#1E1B4B]/10 p-6 sm:p-8 rounded-sm hover:shadow-[0_12px_30px_rgba(30,27,75,0.03)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Glowing accent decor bottom */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E1B4B]/5 group-hover:bg-[#D4AF37] transition-all duration-300" />
              
              <div>
                {/* Visual Top details (Quotes icon + ratings) */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#1E1B4B]/5 flex items-center justify-center text-[#1E1B4B]/60">
                    <Quote className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Core Testimonial text */}
                <blockquote className="font-sans text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Patient/User identity block */}
              <div className="pt-6 border-t border-[#1E1B4B]/10">
                <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1E1B4B]">{t.name}</h4>
                <p className="font-sans text-xs text-slate-500 mt-0.5">{t.role}</p>
                {t.organization && (
                  <div className="flex items-center gap-1.5 mt-2 text-[#0F766E]/80 text-[10px] sm:text-xs font-mono font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t.organization}</span>
                  </div>
                )}
                
                {/* Specific metric or outcome */}
                <div className="bg-[#FAF8F3] border border-[#1E1B4B]/5 px-3 py-1.5 rounded-sm mt-4 text-[10px] sm:text-xs font-sans text-slate-600 flex items-center gap-2">
                  <span className="font-bold text-[#D4AF37]">Outcome:</span>
                  <span>{t.achievement}</span>
                </div>
              </div>

            </div>
          ))}
        </RevealWithStagger>

      </Container>
    </section>
  );
}
