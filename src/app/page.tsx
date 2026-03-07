import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HeroSection from '@/components/sections/HeroSection';
import PathwaysSection from '@/components/sections/PathwaysSection';
import InstrumentsSection from '@/components/sections/InstrumentsSection';
import SummerSection from '@/components/sections/SummerSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GallerySection from '@/components/sections/GallerySection';
import DirectorSection from '@/components/sections/DirectorSection';
import EnrollSection from '@/components/sections/EnrollSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PathwaysSection />
        <InstrumentsSection />
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
