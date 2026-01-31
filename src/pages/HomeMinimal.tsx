import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroMinimal } from '@/components/hero/HeroMinimal';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export function HomeMinimal() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroMinimal />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
