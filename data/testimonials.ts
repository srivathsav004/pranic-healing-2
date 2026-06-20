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
    quote: "According to my experience, integrating these energy hygiene protocols has been revolutionary for preventing practitioner burnout. Learning to sweep away negative ambient fields after long rounds has maintained my daily vitality.",
    achievement: "Decreased ambient stress, increased vitality",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Marc Vandemeer",
    role: "Senior UX Director",
    organization: "Siren Creative Technology",
    quote: "The systematic protocols taught in the Basic workshop felt extremely logical to my analytical mind. There are no mystical assumptions—it is a clear, repeatable set of steps for stress-neutralization and focus.",
    achievement: "Improved focal depth and workplace clarity",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Sarah Jenkins",
    role: "Certified Yoga Instructor & Educator",
    organization: "Prana and Flow Academy",
    quote: "Understanding the detailed anatomy of the 11 major chakras completely changed how I align my posture and guide pranayama. The teachings offer a pristine structure to what many traditional systems only describe in metaphors.",
    achievement: "Deeper alignment of physical and subtle energy systems",
    rating: 5
  }
];
