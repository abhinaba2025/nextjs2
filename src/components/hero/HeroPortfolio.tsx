import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { ArrowDownRight, Github, Linkedin, Twitter } from 'lucide-react';

export function HeroPortfolio() {
  const socials = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Portrait"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-indigo-200 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg text-indigo-600 font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] font-display mb-6"
            >
              John Doe
              <span className="block text-slate-400 text-3xl md:text-4xl mt-2 font-normal">
                Creative Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 mb-8 max-w-lg"
            >
              I craft beautiful digital experiences with a focus on 
              performance, accessibility, and pixel-perfect design.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 mb-10"
            >
              <Button size="lg" icon>
                View My Work
              </Button>
              <a
                href="/contact"
                className="flex items-center gap-2 text-slate-700 font-medium hover:text-indigo-600 transition-colors"
              >
                Let's Talk
                <ArrowDownRight className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-slate-500">Find me on:</span>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
