import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';

export function HeroAgency() {
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const words = [
    { text: 'WE', highlight: false },
    { text: 'CREATE', highlight: false },
    { text: 'BOLD', highlight: true },
    { text: 'DIGITAL', highlight: false },
    { text: 'EXPERIENCES', highlight: false },
  ];

  const stats = [
    { icon: Briefcase, value: '150+', label: 'Projects Delivered' },
    { icon: Award, value: '12', label: 'Design Awards' },
    { icon: Users, value: '50+', label: 'Team Members' },
  ];

  let charIndex = 0;

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-20 w-32 h-32 border-2 border-indigo-500/30"
        initial={{ rotate: 0, scale: 0, opacity: 0 }}
        animate={{ rotate: 45, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/10"
        initial={{ rotate: 0, scale: 0, opacity: 0 }}
        animate={{ rotate: -15, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute top-1/3 left-16 w-1 h-32 bg-gradient-to-b from-indigo-500 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-16 w-1 h-24 bg-gradient-to-t from-purple-500 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        {/* Main Headline */}
        <div className="overflow-hidden mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] font-display">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 md:mr-6 overflow-hidden">
                {word.text.split('').map((char) => {
                  const currentIndex = charIndex++;
                  return (
                    <motion.span
                      key={currentIndex}
                      custom={currentIndex}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className={`inline-block ${word.highlight ? 'text-indigo-400' : ''}`}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtext & CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 max-w-xl">
              Award-winning creative agency crafting unforgettable brand experiences 
              through innovative design, captivating motion, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" icon className="shadow-xl shadow-indigo-500/20">
                View Our Work
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border border-slate-700 hover:bg-white/10"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:items-end gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center lg:text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex lg:justify-end mb-2">
                    <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-500">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-1.5"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-2.5 bg-indigo-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
