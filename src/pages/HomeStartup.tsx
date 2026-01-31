import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroStartup } from '@/components/hero/HeroStartup';
import { Features } from '@/components/sections/Features';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';

export function HomeStartup() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroStartup />
        <Features />
        <Services />
        <Pricing />
        <CTA variant="default" />
      </main>
      <Footer />
    </>
  );
}
