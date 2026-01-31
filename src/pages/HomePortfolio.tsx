import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroPortfolio } from '@/components/hero/HeroPortfolio';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export function HomePortfolio() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroPortfolio />
        <Portfolio />
        <Services />
        <Testimonials />
        <CTA variant="default" />
      </main>
      <Footer />
    </>
  );
}
