export interface Workshop {
  id: string;
  level: string;
  title: string;
  duration: string;
  shortDesc: string;
  longDesc: string;
  prerequisites: string;
  keyTakeaways: string[];
  imageUrl: string;
}

export const workshopsData: Workshop[] = [
  {
    id: "basic-healing",
    level: "Level 1",
    title: "Basic Pranic Healing",
    duration: "2 Days (16 Hours)",
    shortDesc: "Foundations of subtle energy, scanning, cleansing, and directed vitalization.",
    longDesc: "The core starting point for certified energy hygiene. Learn practical, structured protocols to sweep away stagnant energy and rebuild natural vitality without touch.",
    prerequisites: "None (Open to all adults)",
    keyTakeaways: [
      "Anatomy of the 11 major energy centers (chakras).",
      "Tactile scanning to identify subtle field imbalances.",
      "Step-by-step sweeping (cleaning) & pranic energizing.",
      "Distance protocols & the calming Twin Hearts meditation."
    ],
    imageUrl: "https://picsum.photos/seed/healing-basic/600/400"
  },
  {
    id: "advanced-healing",
    level: "Level 2",
    title: "Advanced Pranic Healing",
    duration: "2 Days (16 Hours)",
    shortDesc: "Application of color pranas for specialized and high-impact energy balancing.",
    longDesc: "Master the exact production and targeted projection of six color frequencies. Speeds up natural recovery through fine-tuned vibrational physics.",
    prerequisites: "Basic Pranic Healing (Level 1)",
    keyTakeaways: [
      "Safe projection of specialized high-grade color pranas.",
      "Vibrational laws & biological properties of colors.",
      "Advanced organ scanning & rapid cell regeneration.",
      "Protective energetic shielding procedures."
    ],
    imageUrl: "https://picsum.photos/seed/healing-advanced/600/400"
  },
  {
    id: "pranic-psychotherapy",
    level: "Level 3",
    title: "Pranic Psychotherapy",
    duration: "2 Days (16 Hours)",
    shortDesc: "Bridge between physical energy centers and emotional or mental states.",
    longDesc: "Address how chronic thoughts and stress create tangible residues in the aura. Provides deep tools for emotional resilience, cleansing, and protective shielding.",
    prerequisites: "Advanced Pranic Healing (Level 2)",
    keyTakeaways: [
      "Disintegration of negative belief forms & stress shields.",
      "Specialized aura-cleansing for rapid emotional relief.",
      "Advanced energetic defense webs for daily high-demand realms.",
      "Transmutation of emotional fields into peaceful states."
    ],
    imageUrl: "https://picsum.photos/seed/healing-psycho/600/400"
  }
];
