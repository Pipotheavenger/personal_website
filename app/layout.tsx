import type { Metadata } from 'next';
import { Inter, Oswald, Lora, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const credentialsFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-credentials',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sebastián Valencia | AI Engineer & Data Scientist',
  description:
    'Engineer and computational scientist. Specialized in Data Science, Artificial Intelligence, Machine Learning, and Data Engineering. Transforming data into scalable intelligent systems.',
  keywords: [
    'Data Science',
    'Machine Learning',
    'AI',
    'Data Engineering',
    'Artificial Intelligence',
  ],
  openGraph: {
    title: 'Sebastián Valencia | AI Engineer & Data Scientist',
    description:
      'Transforming data into scalable intelligent systems. Experience in ML, data engineering, and statistical analysis.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${lora.variable} ${credentialsFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-stone-900 font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
