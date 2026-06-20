import * as React from 'react';
import { Container } from './Container';
import { Sparkles, Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1B4B] text-[#FAF8F3]/90 pt-16 pb-12 overflow-hidden border-t border-[#FAF8F3]/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FAF8F3]/10">
          
          {/* Column 1: Info and Branding */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1E1B4B] transition-transform duration-500 group-hover:scale-105">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-medium tracking-tight text-[#FAF8F3] group-hover:text-[#D4AF37] transition-colors">
                Pranic Healing <span className="font-sans text-xs uppercase font-semibold text-[#D4AF37] tracking-widest pl-1 block sm:inline">Institute</span>
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated to preserving the authentic, structured, and modern synthesis of energy hygiene and pranic science as established by Grandmaster Choa Kok Sui.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Educational Path
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors text-slate-300">
                  Subtle Energy Teachings
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-[#D4AF37] transition-colors text-slate-300">
                  Key Healing Principles
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#D4AF37] transition-colors text-slate-300">
                  Workshop Curriculum
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#D4AF37] transition-colors text-slate-300">
                  Energetic Wellness Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Registry */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Student Relations
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>100 Wellness Blvd, Suite 250</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href="mailto:info@pranichealinginstitute.org" className="hover:text-[#D4AF37] transition-colors">
                  registrar@pranichealing.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href="tel:+18005550199" className="hover:text-[#D4AF37] transition-colors">
                  +1 (800) 555-0199
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Standards */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Global Standards
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Our workshops adhere directly to standard syllabi. All certificates issued are officially coordinated and recognized globally by authorized pranic healing boards.
            </p>
          </div>

        </div>

        {/* Corporate Disclosure / Disclaimer */}
        <div className="pt-8 pb-4 text-[11px] sm:text-xs leading-normal text-slate-400 font-sans border-b border-[#FAF8F3]/5">
          <p className="font-semibold text-slate-300 uppercase tracking-wider mb-2">
            IMPORTANT PROFESSIONAL DISCLAIMER:
          </p>
          <p className="mb-4">
            According to the teachings synthesized by Grandmaster Choa Kok Sui, Pranic Healing is designed strictly as a complementary energy-based system. It is not intended to replace orthodox, standard, or clinical medicine. Practitioners of Pranic Healing believe that subtle energy bodies affect physical recovery; however:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Pranic Healing practitioners do **not** diagnose physical/mental conditions, do **not** prescribe pharmaceuticals, and do **not** perform medical procedures.
            </li>
            <li>
              Pranic Healing does **not** interfere with prescribed medical treatments. If you suffer from a severe or chronic physical or psychological condition, please seek professional medical care immediately.
            </li>
            <li>
              No scientific claims or clinical guarantees are implied. All information presented on this website is for educational, individual awareness, and general wellness purposes only.
            </li>
          </ul>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <p>&copy; {currentYear} Pranic Healing Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Registry Verification</a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
