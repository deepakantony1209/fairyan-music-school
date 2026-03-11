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
    images: [{ url: '/fairyan-favicon.svg', width: 800, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairyan Music School',
    images: ['/fairyan-favicon.svg'],
  },
  icons: {
    icon: [
      { url: '/fairyan-favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: ['/fairyan-favicon.svg'],
    apple: [
      { url: '/fairyan-favicon.svg' }
    ],
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
      <head>
        {/* Preconnect: fonts and critical APIs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* Google Fonts — non-blocking with display=swap */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Cormorant+SC:wght@300;400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        />
      </head>
      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

