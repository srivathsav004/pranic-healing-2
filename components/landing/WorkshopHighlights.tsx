'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '../shared/Container';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import { Reveal } from '../shared/Reveal';
import { workshopsData, Workshop } from '../../data/workshops';
import { Clock, BookOpen, Key, Calendar, Sparkles } from 'lucide-react';

export function WorkshopHighlights() {
  const [activeTab, setActiveTab] = React.useState<string>('basic-healing');

  const selectedWorkshop = workshopsData.find((w) => w.id === activeTab) || workshopsData[0];

  return (
    <section id="workshops" className="py-20 sm:py-28 bg-[#FAF8F3]/50 border-y border-[#1E1B4B]/5 relative">
      <Container>
        
        {/* Section Heading */}
        <Reveal delay={0.1} yOffset={24}>
          <SectionHeading
            title="Professional Workshop Curriculum"
            subtitle="The Certified Journey"
            description="Our training programs follow a rigid, fully standardized global curriculum. Each workshop represents a progressive step in mastering the manipulation and understanding of subtle energy systems."
          />
        </Reveal>

        {/* Tab Buttons Selection Wrapper */}
        <div className="flex justify-center mb-10 max-w-xl mx-auto border border-[#1E1B4B]/10 p-1 bg-[#FAF8F3] rounded-sm shadow-sm md:flex-row flex-col gap-1">
          {workshopsData.map((workshop) => (
            <button
              key={workshop.id}
              onClick={() => setActiveTab(workshop.id)}
              className={`flex-1 font-sans text-xs sm:text-xs font-semibold py-2.5 px-4 uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                activeTab === workshop.id
                  ? 'bg-[#1E1B4B] text-[#FAF8F3] shadow-md'
                  : 'text-[#1E1B4B]/70 hover:text-[#1E1B4B] hover:bg-[#1E1B4B]/5'
              }`}
            >
              {workshop.level}
            </button>
          ))}
        </div>

        {/* Active Workshop Display Box */}
        <div className="bg-[#FAF8F3] border border-[#1E1B4B]/10 rounded-sm p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(30,27,75,0.02)] transition-opacity duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Visual Aspect column (Left on Desktop) */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-sm overflow-hidden border border-[#1E1B4B]/15 shadow-md">
                <Image
                  src={selectedWorkshop.imageUrl}
                  alt={selectedWorkshop.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F3] border border-[#1E1B4B]/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#1E1B4B]">
                  {selectedWorkshop.duration}
                </div>
              </div>

              {/* Extra Course Stats Table for Corporate Alignment */}
              {/* <div className="bg-[#1E1B4B] text-[#FAF8F3] p-6 rounded-sm mt-6 border border-[#FAF8F3]/5">
                <h4 className="font-serif text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Curriculum Integrity</span>
                </h4>
                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between pb-2 border-b border-[#FAF8F3]/10">
                    <span className="text-slate-400">Prerequisite</span>
                    <span className="font-medium text-right font-serif">{selectedWorkshop.prerequisites}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#FAF8F3]/10">
                    <span className="text-slate-400">Certification Status</span>
                    <span className="font-medium">Globally Recognized Certificate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Authorized Textbooks</span>
                    <span className="font-medium">Original Choa Kok Sui Materials</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Core Contents Column (Right on Desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <span className="text-[10px] uppercase font-mono font-bold text-[#0F766E] tracking-widest bg-[#0F766E]/5 px-2 py-0.5 rounded-sm self-start mb-2">
                Curriculum Block — {selectedWorkshop.level}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E1B4B] font-normal leading-tight mb-4">
                {selectedWorkshop.title}
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                {selectedWorkshop.longDesc}
              </p>

              {/* Takeaways / What you learn list */}
              <div className="mb-8">
                <h4 className="font-serif text-base text-[#1E1B4B] font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#5B21B6]" />
                  <span>Key Skill Takeaways</span>
                </h4>
                <ul className="space-y-3">
                  {selectedWorkshop.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {takeaway}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action Box */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#1E1B4B]/10">
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto"
                >
                  Apply to Register
                </Button>
                <div className="text-[#1E1B4B]/60 flex items-center gap-1.5 text-xs font-sans">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Weekend sessions forming monthly</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
