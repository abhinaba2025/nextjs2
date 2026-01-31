import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Portfolio } from '@/components/sections/Portfolio';
import { CTA } from '@/components/sections/CTA';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function PortfolioPage() {
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
                Our Work
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                Featured{' '}
                <span className="gradient-text">Projects</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600"
              >
                Explore our portfolio of successful projects and see how we've 
                helped businesses achieve their goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
