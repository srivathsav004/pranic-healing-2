export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization?: string;
  quote: string;
  achievement: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dr. Elena Rostova",
    role: "Integrative Health Consultant",
    organization: "Elysian Wellness Group",
    quote: "Integrating these energy hygiene protocols was revolutionary for preventing burnout. Discharging ambient stress after client sessions has restored my daily vitality.",
    achievement: "Dramatically lower stress, fresh energy",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Marc Vandemeer",
    role: "Senior UX Director",
    organization: "Siren Creative Technology",
    quote: "The systematic protocols are incredibly logical. No vague metaphors—just a highly repeatable, step-by-step framework for stress-neutralization.",
    achievement: "Greater mental clarity and design focus",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Sarah Jenkins",
    role: "Certified Yoga Instructor & Educator",
    organization: "Prana and Flow Academy",
    quote: "Understanding the detailed anatomy of the 11 major chakras changed everything. The course offers physical structure to what other systems describe only in abstract.",
    achievement: "Deeper physical and energetic alignment",
    rating: 5
  }
];
