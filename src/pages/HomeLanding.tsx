import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroLanding } from '@/components/hero/HeroLanding';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export function HomeLanding() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroLanding />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
