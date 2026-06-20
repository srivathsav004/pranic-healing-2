'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../shared/Container';
import { Button } from '../shared/Button';
import { SectionHeading } from '../shared/SectionHeading';
import { Check, Mail, User, BookOpen, AlertCircle, Sparkles, Send } from 'lucide-react';

export function CTA() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    workshop: 'basic-healing',
    experience: 'beginner',
    agreeDisclaimer: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');
  const [referenceCode, setReferenceCode] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Pre-validations
    if (!formData.name) {
      setError('Please provide your full legal name.');
      return;
    }
    if (!formData.email) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.agreeDisclaimer) {
      setError('You must read and agree to the complementary medical disclosure.');
      return;
    }

    setIsSubmitting(true);

    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceCode('PIW-' + (Math.floor(Math.random() * 90000) + 10000));
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="cta" className="py-20 sm:py-28 bg-[#1E1B4B] text-[#FAF8F3] relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5B21B6]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#0F766E]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Register guidelines */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] mb-3 font-semibold">
              Enrollment Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white mb-6">
              Begin Your Practice in subtle energy mechanics
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              According to regional academy rules, applicants must be 18 years or older, have standard mental wellness hygiene, and submit this educational registrar form to verify their seat.
            </p>

            {/* Checklist of requirements */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="font-sans text-xs sm:text-sm">
                  <span className="font-semibold text-white block">Official Materials Provided</span>
                  <p className="text-slate-400">All registered students receive licensed handbooks for home reviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="font-sans text-xs sm:text-sm">
                  <span className="font-semibold text-white block">Mentorship Schedulers</span>
                  <p className="text-slate-400">Receive free coordinate entry to monthly group meditation practices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="font-sans text-xs sm:text-sm">
                  <span className="font-semibold text-white block">Full Registry Listing</span>
                  <p className="text-slate-400">Certifications are verified on our secure online registry portal.</p>
                </div>
              </div>
            </div>

            {/* Support footer */}
            <div className="pt-8 mt-8 border-t border-[#FAF8F3]/10 text-xs text-slate-400 font-mono">
              <span>Registrar Support: registrar@pranichealing.org</span>
            </div>
          </div>

          {/* Right Column: Portal form container */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#FAF8F3] text-[#1E1B4B] p-6 sm:p-10 rounded-sm shadow-2xl relative border border-[#FAF8F3]/10">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="registration-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E1B4B] mb-2">
                        Admission Interest Application
                      </h3>
                      <p className="font-sans text-xs text-slate-500 mb-6">
                        Complete this brief application to check upcoming weekend seats. No payment is required yet.
                      </p>
                    </div>

                    {/* Form errors */}
                    {error && (
                      <div className="bg-red-50 text-red-700 p-4 rounded-sm text-xs sm:text-sm flex items-start gap-2.5 font-sans border-l-2 border-red-600">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Input name */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="name-input" className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-slate-400">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="name-input"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Legal Name"
                          className="font-sans text-sm w-full bg-slate-50 border border-slate-200 focus:border-[#1E1B4B] focus:bg-white rounded-sm py-2.5 pl-10 pr-4 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Input email */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="email-input" className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="email-input"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="font-sans text-sm w-full bg-slate-50 border border-slate-200 focus:border-[#1E1B4B] focus:bg-white rounded-sm py-2.5 pl-10 pr-4 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Selection Workshop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 flex flex-col">
                        <label htmlFor="workshop-select" className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Preferred Workshop
                        </label>
                        <select
                          id="workshop-select"
                          value={formData.workshop}
                          onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                          className="font-sans text-sm w-full bg-slate-50 border border-slate-200 focus:border-[#1E1B4B] focus:bg-white rounded-sm py-2.5 px-3 outline-none transition-colors cursor-pointer"
                        >
                          <option value="basic-healing">Basic Pranic Healing (Level 1)</option>
                          <option value="advanced-healing">Advanced Pranic Healing (Level 2)</option>
                          <option value="pranic-psychotherapy">Pranic Psychotherapy (Level 3)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 flex flex-col">
                        <label htmlFor="experience-select" className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Pranic Experience
                        </label>
                        <select
                          id="experience-select"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="font-sans text-sm w-full bg-slate-50 border border-slate-200 focus:border-[#1E1B4B] focus:bg-white rounded-sm py-2.5 px-3 outline-none transition-colors cursor-pointer"
                        >
                          <option value="beginner">None / Beginner</option>
                          <option value="intermediate">Have read standard books</option>
                          <option value="advanced">Returning Certified Alumnus</option>
                        </select>
                      </div>
                    </div>

                    {/* Custom Consent / complementary medical disclaimer check */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <input
                          id="disclaimer-checkbox"
                          type="checkbox"
                          checked={formData.agreeDisclaimer}
                          onChange={(e) => setFormData({ ...formData, agreeDisclaimer: e.target.checked })}
                          className="mt-1 accent-[#1E1B4B] w-4 h-4 rounded-sm"
                        />
                        <label htmlFor="disclaimer-checkbox" className="font-sans text-xs text-slate-600 leading-normal select-none">
                          <span className="font-semibold text-[#1E1B4B]">Complementary Care Agreement:</span> I acknowledge that Pranic Healing is a non-touch energy modality designed strictly to complement and NOT replace traditional professional medical therapy. I certify that I am at least 18 years old.
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      className="mt-4 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'submitting request...' : 'Submit Entry Request'}
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div className="max-w-md">
                      <h4 className="font-serif text-2xl font-semibold text-[#1E1B4B] mb-2">
                        Admission Request Received
                      </h4>
                      <p className="font-sans text-sm text-slate-600 leading-relaxed">
                        Thank you, <span className="font-bold">{formData.name}</span>. According to standard enrollment procedures, our regional registrar will assess your seat request and reply at <span className="font-semibold">{formData.email}</span> within 24 business hours.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-sm text-xs font-mono text-slate-500 max-w-sm">
                      Reference Code: {referenceCode}
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          workshop: 'basic-healing',
                          experience: 'beginner',
                          agreeDisclaimer: false
                        });
                      }}
                      className="mt-2"
                    >
                      Submit Another Query
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
