import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="text-[12rem] md:text-[16rem] font-bold text-slate-100 leading-none font-display select-none"
            >
              404
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 -mt-16 mb-4 font-display"
            >
              Page Not Found
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 mb-8"
            >
              Oops! The page you're looking for doesn't exist or has been moved.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/">
                <Button icon>
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
