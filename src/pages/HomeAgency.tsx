import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroAgency } from '@/components/hero/HeroAgency';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export function HomeAgency() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroAgency />
        <Portfolio />
        <Services />
        <Testimonials />
        <CTA variant="dark" />
      </main>
      <Footer />
    </>
  );
}
