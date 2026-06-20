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
    shortDesc: "Learn the foundational principles of subtle energy, scanning, cleansing, and directed energizing.",
    longDesc: "This introductory course provides the bedrock of energy hygiene and pranic principles. Participants learn to feel and assess subtle energy fields, step-by-step techniques to sweep away depleted or congested elements, and the fundamentals of projecting fresh vital energy. The training provides a structured approach to self-healing and distance protocols.",
    prerequisites: "None (Open to all adults)",
    keyTakeaways: [
      "Understand the energetic anatomy, active meridians, and the 11 major energy centers (chakras).",
      "Develop sensitivity to feel aura density and identify imbalances through scanning.",
      "Master the techniques of cleansing (decongestion) and energizing to support rapid restoration.",
      "Learn preventative self-healing techniques and distance healing methods for loved ones.",
      "Experience the Meditation on Twin Hearts, highly regarded by practitioners for peace and mental clarity."
    ],
    imageUrl: "https://picsum.photos/seed/healing-basic/600/400"
  },
  {
    id: "advanced-healing",
    level: "Level 2",
    title: "Advanced Pranic Healing",
    duration: "2 Days (16 Hours)",
    shortDesc: "Incorporate the systematic application of color pranas for specialized and rapid energy balancing.",
    longDesc: "According to teachings, colors represent different frequencies and properties of life energy. Level 2 guides participants through the precise production and application of six color pranas—light-white, light-red, light-orange, light-yellow, light-green, light-blue, and light-violet. Designed for intermediate study, this workshop provides structured protocols for physical restoration.",
    prerequisites: "Basic Pranic Healing (Level 1)",
    keyTakeaways: [
      "Learn to project high-grade, specialized color pranas safely and effectively.",
      "Understand the healing rates and biological properties corresponding to different colors.",
      "Master advanced scanning to assess deep-seated energetic patterns and organ system conditions.",
      "Incorporate advanced techniques for rapid cell regeneration and body fluid purification.",
      "Utilize energy hygiene instructions to safeguard the practitioner's vitality during sessions."
    ],
    imageUrl: "https://picsum.photos/seed/healing-advanced/600/400"
  },
  {
    id: "pranic-psychotherapy",
    level: "Level 3",
    title: "Pranic Psychotherapy",
    duration: "2 Days (16 Hours)",
    shortDesc: "Bridge the gap between physical energy centers and subjective emotional or mental states.",
    longDesc: "This advanced workshop addresses how thoughts and feelings affect the human aura. Participants explore the underlying energetic structures contributing to stress, anxiety, habitual emotions, and grief. The coursework focuses on specialized techniques for cleansing negative thought forms, shielding personal energy, and healing psychological stress.",
    prerequisites: "Advanced Pranic Healing (Level 2)",
    keyTakeaways: [
      "Identify and safely disintegrate negative thought-forms, emotional blockages, and crystalline belief structures.",
      "Learn and apply specialized aura cleansing techniques for rapid, stable psychological equilibrium.",
      "Master energetic shielding techniques to defend against ambient negativity or stress in daily life.",
      "Understand the direct correlation between specific emotions and their corresponding chakra structures.",
      "Use advanced meditation techniques for emotional transmuting and continuous inner harmony."
    ],
    imageUrl: "https://picsum.photos/seed/healing-psycho/600/400"
  }
];
