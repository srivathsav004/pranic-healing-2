'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowDown, CornerRightDown, Sparkles } from 'lucide-react';
import { Container } from '../shared/Container';
import { Button } from '../shared/Button';
import { Reveal, RevealWithStagger } from '../shared/Reveal';

export function Hero() {
  const handleScrollToWorkshops = () => {
    const workshops = document.getElementById('workshops');
    if (workshops) {
      workshops.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 bg-[#FAF8F3] overflow-hidden flex items-center">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-[#5B21B6]/3 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-[35rem] h-[35rem] bg-[#0F766E]/2 rounded-full blur-[90px] -z-10 pointer-events-none" />
      
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <Reveal delay={0.1} yOffset={20}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0F766E]/5 text-[#0F766E] rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-5 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Professional Training</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} yOffset={30}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E1B4B] tracking-tight leading-[1.1] mb-6">
              The Art & Science of <br className="hidden sm:inline" />
              <span className="text-[#5B21B6] italic relative">
                Subtle Energy
              </span>{' '}
              Wellness
            </h1>
          </Reveal>

          <Reveal delay={0.3} yOffset={24}>
            <p className="font-sans text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 sm:mb-10">
              According to Pranic Healing teachings, physical vitality and psychological equilibrium are stored in our subtle energy field. Learn structured, fully replicable techniques to assess, cleanse, and optimize your vital body.
            </p>
          </Reveal>

          <Reveal delay={0.4} yOffset={20}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToWorkshops}
                className="group flex justify-center items-center gap-2"
              >
                Register For Workshops
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToAbout}
                className="group flex justify-center items-center gap-2"
              >
                Read Teachings
                <CornerRightDown className="w-4 h-4 text-[#1E1B4B]/60" />
              </Button>
            </div>
          </Reveal>

          {/* Core Foundations Grid */}
          <Reveal delay={0.5} yOffset={16}>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1E1B4B]/5 max-w-lg">
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#1E1B4B]">30+</div>
                <div className="font-sans text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1">Countries</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#1E1B4B]">100%</div>
                <div className="font-sans text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1">Non-Touch</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#1E1B4B]">11</div>
                <div className="font-sans text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1">Major Chakras</div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Right Column: Editorial Photograph */}
        <div className="lg:col-span-5 relative w-full flex justify-center py-6 sm:py-8 lg:py-0">
          <Reveal delay={0.3} yOffset={40} className="relative w-full max-w-[400px] lg:max-w-none">
            {/* Soft geometric borders */}
            <div className="absolute -inset-4 border border-[#1E1B4B]/5 rounded-sm pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1B4B]/10 to-transparent rounded-sm translate-x-3 translate-y-3 -z-10" />
            
            <div className="relative aspect-[3/4] w-full bg-slate-100 rounded-sm overflow-hidden border-2 border-[#1E1B4B] shadow-[0_20px_50px_rgba(30,27,75,0.06)] group">
              <Image
                src="https://picsum.photos/seed/meditation-aura/800/1000"
                alt="Mindfulness meditation session with clear glowing environment representing the energy field"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 400px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/60 via-transparent to-transparent opacity-80" />
              
              {/* Overlaid minimal quote */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm">
                <span className="block text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest mb-1">
                  Classical Synthesis
                </span>
                <p className="font-serif font-light italic leading-relaxed">
                  &ldquo;Prana is the vital force that bridges nature and organic consciousness.&rdquo;
                </p>
              </div>
            </div>

            {/* Little floating detail card */}
            <div className="absolute -left-6 bottom-16 bg-[#FAF8F3] border border-[#1E1B4B]/15 p-4 rounded-sm shadow-xl hidden sm:flex items-center gap-3 max-w-[200px]">
              <div className="w-3 h-3 rounded-full bg-[#0F766E] animate-ping shrink-0" />
              <div className="font-sans text-[11px] leading-snug">
                <span className="font-semibold text-[#1E1B4B] block">Next Training Session</span>
                <span className="text-slate-500">Registrations actively open</span>
              </div>
            </div>
          </Reveal>
        </div>

      </Container>
    </section>
  );
}
