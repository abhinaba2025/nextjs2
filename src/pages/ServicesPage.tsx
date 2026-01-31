import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              >
                Our Services
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                Comprehensive{' '}
                <span className="gradient-text">Digital Solutions</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600"
              >
                From strategy to execution, we provide end-to-end services to help 
                your business thrive in the digital landscape.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
