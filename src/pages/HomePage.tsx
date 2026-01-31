import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroCorporate } from '@/components/hero/HeroCorporate';
import { Features } from '@/components/sections/Features';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { HomeSelector } from '@/components/sections/HomeSelector';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';

function TrustedBy() {
  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Netflix'
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted by the world's leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <span 
                key={company} 
                className="text-xl md:text-2xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-pointer font-display"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroCorporate />
        <TrustedBy />
        <HomeSelector />
        <Features />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
