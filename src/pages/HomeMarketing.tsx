import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroMarketing } from '@/components/hero/HeroMarketing';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export function HomeMarketing() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroMarketing />
        <Services />
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
