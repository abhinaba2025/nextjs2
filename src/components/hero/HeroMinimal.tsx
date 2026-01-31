import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function HeroMinimal() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-6"
            >
              Digital Agency
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8"
            >
              We craft{' '}
              <span className="font-medium italic">beautiful</span>{' '}
              digital experiences
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8"
            >
              <Button variant="dark" size="lg">
                Our Work
              </Button>
              <a href="/about" className="text-slate-900 font-medium animated-underline">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop"
                alt="Abstract art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-slate-100 rounded-full" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-slate-200 rounded-full" />
          </motion.div>
        </div>

        {/* Scroll Line */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
            <motion.div
              className="w-px h-12 bg-slate-300"
              animate={{ scaleY: [0, 1, 0], originY: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
