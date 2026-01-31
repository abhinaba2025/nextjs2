import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSaaS } from '@/components/hero/HeroSaaS';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export function HomeSaaS() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroSaaS />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
