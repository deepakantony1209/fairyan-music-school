import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HeroSection from '@/components/sections/HeroSection'; // eager — LCP critical

// Defer all below-the-fold sections so Framer Motion is not in the initial bundle
const PathwaysSection    = dynamic(() => import('@/components/sections/PathwaysSection'));
const InstrumentsSection = dynamic(() => import('@/components/sections/InstrumentsSection'));
const ClassesSection     = dynamic(() => import('@/components/sections/ClassesSection'));
const SummerSection      = dynamic(() => import('@/components/sections/SummerSection'));
const ExperienceSection  = dynamic(() => import('@/components/sections/ExperienceSection'));
const GallerySection     = dynamic(() => import('@/components/sections/GallerySection'));
const DirectorSection    = dynamic(() => import('@/components/sections/DirectorSection'));
const EnrollSection      = dynamic(() => import('@/components/sections/EnrollSection'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PathwaysSection />
        <InstrumentsSection />
        <ClassesSection />
        <SummerSection />
        <ExperienceSection />
        <GallerySection />
        <DirectorSection />
        <EnrollSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
