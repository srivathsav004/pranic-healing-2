'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { Award, ShieldCheck, Landmark, Check } from 'lucide-react';

export function Instructor() {
  return (
    <section id="instructor" className="py-20 sm:py-28 bg-[#FAF8F3] relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#1E1B4B]/2 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait representation */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
            <Reveal delay={0.2} yOffset={30} className="relative w-full max-w-[380px] lg:max-w-none">
              
              {/* Outer delicate lines */}
              <div className="absolute -inset-4 border border-[#1E1B4B]/10 rounded-sm pointer-events-none" />
              <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-3 translate-y-3 -z-10 rounded-sm" />
              
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-[#1E1B4B]/15 shadow-xl bg-slate-200">
                <Image
                  src="https://picsum.photos/seed/certified-instructor/600/800"
                  alt="Senior Licensed Pranic Healing Instructor in a tidy, professional workspace with clean warm background"
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Instructor Badge */}
              <div className="absolute -right-6 bottom-14 bg-[#FAF8F3] border border-[#1E1B4B]/10 rounded-sm p-4 shadow-xl max-w-[220px]">
                <div className="flex gap-2 items-start text-left">
                  <div className="p-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mt-0.5 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-[#1E1B4B]">Globally Certified</h5>
                    <p className="font-sans text-[10px] text-slate-500 mt-1">Authorized IIS Licensed Teacher & Coordinator</p>
                  </div>
                </div>
              </div>

            </Reveal>
          </div>

          {/* Right Column: Narrative credentials */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <Reveal delay={0.1} yOffset={24}>
              <SectionHeading
                title="A Faculty Guided by Years of Dedicated Study"
                subtitle="Authorized Instruction"
                align="left"
                className="mb-8"
              />
            </Reveal>

            <Reveal delay={0.2} yOffset={20} className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed space-y-6">
              <p>
                Pranic Healing is an exact science that requires deep understanding, personal dedication, and meticulous technical precision. Therefore, our workshops are taught exclusively by licensed Senior Instructors recognized by the international governing bodies of Pranic Healing.
              </p>
              <p>
                Our lead educational coordinators have spent decades studying subtle energy structures, assisting thousands of students worldwide. According to core regulations, they maintain strict adherence to the standardized techniques established by Grandmaster Choa Kok Sui—ensuring that every sweep, scan, and project is taught safely and effectively.
              </p>

              {/* Professional standards checkpoints */}
              <div className="space-y-4 pt-6 border-t border-[#1E1B4B]/5">
                <div className="flex items-start gap-3">
                  <div className="text-[#0f766e] shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1E1B4B]">Verified Licensure Standards</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                      Every instructor holds an active license updated continuously via strict international standards of practice, ethical reviews, and meditation hygiene benchmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#0f766e] shrink-0 mt-1">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1E1B4B]">Structured Clinical Compliances</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                      Our academy operates under a firm complementary wellness charter, cooperating with mental health counselors, integrative doctors, and educational boards. We never issue clinical cures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#0f766e] shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1E1B4B]">Supervised Practical Scaffolding</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                      Workshops are not just lectures. Over 60% of class time is spent on supervised, hands-on physical scanning and energetic cleansing drills under instant instructor feedback.
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
