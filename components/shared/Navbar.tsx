'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Teachings', href: '#about' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Licensed Faculty', href: '#instructor' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#1E1B4B]/5 py-3 shadow-[0_4px_30px_rgba(30,27,75,0.02)]'
            : 'bg-transparent py-5'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group outline-none">
            <div className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-[#D4AF37] transition-transform duration-500 group-hover:rotate-12">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1E1B4B] group-hover:text-[#5B21B6] transition-colors">
              Pranic Healing <span className="font-sans text-xs uppercase font-semibold text-[#D4AF37] tracking-widest pl-1">Institute</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-[#1E1B4B]/80 hover:text-[#5B21B6] transition-colors leading-6"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to action */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const element = document.getElementById('workshops');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2"
            >
              Register
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#1E1B4B] hover:text-[#5B21B6] focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] bg-[#FAF8F3] z-40 border-b border-[#1E1B4B]/10 shadow-lg md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-sans text-base font-medium text-[#1E1B4B]/80 hover:text-[#5B21B6] py-2 border-b border-[#1E1B4B]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.getElementById('workshops');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex justify-center items-center gap-2"
                >
                  Register for a Workshop
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Inline helper is local to compile safely
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
