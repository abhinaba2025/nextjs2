import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Sparkles, Zap, Shield, BarChart3, Check, ArrowRight } from 'lucide-react';

export function HeroSaaS() {
  const features = [
    'Unlimited projects',
    'Advanced analytics',
    'Priority support',
    '99.9% uptime SLA',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glowing Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>Introducing NEXORA 2.0 — Now with AI-Powered Features</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-display mb-6"
          >
            The Future of{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SaaS Productivity
              </span>
            </span>{' '}
            is Here
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Streamline your workflow, automate repetitive tasks, and unlock powerful insights 
            that drive your business forward. All in one beautiful, powerful platform.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button size="lg" icon className="shadow-xl shadow-indigo-500/25">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-white hover:bg-white hover:text-slate-900 hover:border-white"
            >
              View Pricing
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-16"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-blue-400" />
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-2xl shadow-indigo-500/10">
            {/* Browser Chrome */}
            <div className="h-10 bg-slate-800 flex items-center gap-2 px-4 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-slate-700/50 text-xs text-slate-400">
                  app.nexora.com/dashboard
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
              alt="NEXORA Dashboard - Analytics and Insights"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          </div>

          {/* Floating Stats Card - Left */}
          <motion.div
            className="absolute -left-4 lg:-left-8 top-1/3 bg-slate-800/90 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">+127%</p>
                <p className="text-xs text-slate-400">Revenue Growth</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Stats Card - Right */}
          <motion.div
            className="absolute -right-4 lg:-right-8 bottom-1/3 bg-slate-800/90 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10x</p>
                <p className="text-xs text-slate-400">Faster Workflows</p>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature) => (
                <span key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="h-4 w-4 text-green-400" />
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-wider">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {['Spotify', 'Slack', 'Dropbox', 'Notion', 'Figma', 'Stripe'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold text-slate-400 font-display hover:text-white transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
