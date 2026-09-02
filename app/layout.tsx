import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.manjulaventures.com'),
  title: 'Manjula Ventures | Social Media Management & Digital Growth Agency',
  description:
    'Manjula Ventures is a digital growth agency in Gadag, Karnataka, helping businesses grow online through social media management, creative content, reels, poster design, and high-ROI ad campaigns.',
  keywords: [
    'social media management',
    'digital marketing agency',
    'content creation',
    'reels production',
    'poster design',
    'social media advertising',
    'brand promotion',
    'digital growth',
    'Gadag Karnataka',
    'Manjula Ventures',
  ],
  authors: [{ name: 'Manjula Ventures' }],
  creator: 'Manjula Ventures',
  openGraph: {
    title: 'Manjula Ventures | Social Media Management & Digital Growth Agency',
    description:
      'Helping businesses grow online through creative content, social media management, reels, posters, and targeted advertising. Based in Gadag, Karnataka.',
    type: 'website',
    siteName: 'Manjula Ventures',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manjula Ventures | Digital Growth Agency',
    description:
      'Helping businesses grow online through creative content, social media management, reels, and targeted advertising.',
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
