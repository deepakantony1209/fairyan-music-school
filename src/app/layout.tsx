import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://fairyanmusicschool.com'),
  title: 'Fairyan Music School | Premium Music Classes — Guitar, Piano, Vocals & More',
  description: 'Join Fairyan Music School — 25 years of excellence. Classes for all ages in guitar, piano, drums, violin & vocals. Max 8 students per batch. Book a free trial.',
  keywords: ['music classes', 'guitar lessons', 'piano classes', 'music school', 'Fairyan', 'music education'],
  authors: [{ name: 'Fairyan Music School' }],
  openGraph: {
    type: 'website',
    title: 'Fairyan Music School',
    description: '25 years of musical excellence. Personalized instruction for students of all ages.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairyan Music School',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
