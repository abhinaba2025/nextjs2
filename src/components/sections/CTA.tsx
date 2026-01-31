import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { ArrowRight, Sparkles, Check, Zap } from 'lucide-react';

interface CTAProps {
  variant?: 'default' | 'dark' | 'gradient';
}

export function CTA({ variant = 'default' }: CTAProps) {
  const benefits = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
  ];

  return (
    <section className={`relative overflow-hidden ${
      variant === 'gradient'
        ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'
        : variant === 'dark'
        ? 'bg-slate-900'
        : 'bg-gradient-to-r from-indigo-600 to-purple-600'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white/10"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          rotate: [180, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-xl bg-white/5 rotate-45"
        animate={{
          y: [0, 20, 0],
          rotate: [45, 90, 45],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            Ready to Transform Your Business?
            <Zap className="h-4 w-4" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-display mb-6"
          >
            Start Building Amazing
            <br />
            Digital Experiences Today
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of businesses already using NEXORA to create stunning websites 
            and powerful digital solutions that drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-slate-100 shadow-xl hover:shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            {benefits.map((benefit) => (
              <span key={benefit} className="flex items-center gap-2 text-white/80 text-sm">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                {benefit}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 pt-10 border-t border-white/10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Trusted by', '500+ Companies', '•', '50,000+ Users', '•', '4.9/5 Rating'].map((text, i) => (
              <span key={i} className="text-white text-sm font-medium">
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
