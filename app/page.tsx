import * as React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/landing/Hero';
import { AboutPranicHealing } from '@/components/landing/AboutPranicHealing';
import { WorkshopHighlights } from '@/components/landing/WorkshopHighlights';
import { Instructor } from '@/components/landing/Instructor';
import { TestimonialsPreview } from '@/components/landing/TestimonialsPreview';
import { FAQ } from '@/components/landing/FAQ';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      {/* Structural Headers & Nav */}
      <Navbar />
      
      {/* Core Grid Sections */}
      <main id="main-content" className="flex-grow">
        
        {/* Module 1: The Hero Splash */}
        <Hero />
        
        {/* Module 2: The Foundational Science Overview */}
        <AboutPranicHealing />
        
        {/* Module 3: Standard Global Curriculum Interactive Matrix */}
        <WorkshopHighlights />
        
        {/* Module 4: Accredited Facilitator Narrative */}
        <Instructor />
        
        {/* Module 5: Certified Professional Feedbacks */}
        <TestimonialsPreview />
        
        {/* Module 6: Expandable Inquiry Archive */}
        <FAQ />
        
        {/* Module 7: Functional Integrated Contact/Admission Panel */}
        <CTA />
        
      </main>

      {/* Corporate Wellness Disclosure Footer */}
      <Footer />
    </>
  );
}
