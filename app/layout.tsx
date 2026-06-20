import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pranic Healing Institute | Certified Subtle Energy Workshops',
  description: 'A premium, professional, and educational portal dedicated to Pranic Healing workshops, courses, core principles, and wellness teachings as formulated by Grandmaster Choa Kok Sui.',
  openGraph: {
    title: 'Pranic Healing Institute | Certified Subtle Energy Workshops',
    description: 'Master the art and science of energy hygiene and pranic science. Standardized global curriculum with licensed Senior Instructors.',
    url: 'https://pranichealinginstitute.org',
    siteName: 'Pranic Healing Institute',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranic Healing Institute | Subtle Energy Workshops',
    description: 'Learn certified, non-touch energy science with standardized global courses, licensed handbooks, and clinical-complementary modules.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#FAF8F3] text-slate-800 antialiased min-h-screen flex flex-col justify-between" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
