import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroAI } from '@/components/hero/HeroAI';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export function HomeAI() {
  return (
    <div className="bg-[#030712]">
      <Header variant="dark" />
      <main>
        <HeroAI />
        <div className="bg-white">
          <Features />
          <Pricing />
          <FAQ />
        </div>
        <CTA variant="gradient" />
      </main>
      <Footer />
    </div>
  );
}
