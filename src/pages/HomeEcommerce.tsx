import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroEcommerce } from '@/components/hero/HeroEcommerce';
import { Features } from '@/components/sections/Features';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export function HomeEcommerce() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroEcommerce />
        <Features />
        {/* Reusing Portfolio as Product Showcase for demo purposes */}
        <Portfolio /> 
        <Testimonials />
        <CTA variant="dark" />
      </main>
      <Footer />
    </>
  );
}
