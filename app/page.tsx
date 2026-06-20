import * as React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/landing/Hero';
import { AboutPranicHealing } from '@/components/landing/AboutPranicHealing';
import { KeyPrinciples } from '@/components/landing/KeyPrinciples';
import { WorkshopHighlights } from '@/components/landing/WorkshopHighlights';
import { Instructor } from '@/components/landing/Instructor';
import { Benefits } from '@/components/landing/Benefits';
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
        
        {/* Module 3: Six Core Pillars Grid */}
        <KeyPrinciples />
        
        {/* Module 4: Standard Global Curriculum Interactive Matrix */}
        <WorkshopHighlights />
        
        {/* Module 5: Accredited Facilitator Narrative */}
        <Instructor />
        
        {/* Module 6: Practical Health/Performance Merits */}
        <Benefits />
        
        {/* Module 7: Certified Professional Feedbacks */}
        <TestimonialsPreview />
        
        {/* Module 8: Expandable Inquiry Archive */}
        <FAQ />
        
        {/* Module 9: Functional Integrated Contact/Admission Panel */}
        <CTA />
        
      </main>

      {/* Corporate Wellness Disclosure Footer */}
      <Footer />
    </>
  );
}
