import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Play, Users, Award, TrendingUp, Shield } from 'lucide-react';

export function HeroCorporate() {
  const features = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Users, text: 'Global Support' },
    { icon: TrendingUp, text: '99.9% Uptime' },
  ];

  const stats = [
    { value: '500+', label: 'Clients Worldwide' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '150+', label: 'Team Members' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[100px] opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-200 rounded-full blur-[100px] opacity-30"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
              </span>
              Trusted by 500+ Leading Companies
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] font-display mb-6"
            >
              Transform Your{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Business</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.path
                    d="M2 10C50 2 150 2 298 10"
                    stroke="url(#gradient-underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>{' '}
              For The Digital Age
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Empower your enterprise with cutting-edge solutions that drive growth, 
              efficiency, and innovation. We help businesses scale globally with 
              technology that delivers results.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button size="lg" icon>
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Play className="h-5 w-5 text-slate-700 ml-0.5" fill="currentColor" />
                </div>
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern office with team collaboration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
            </div>

            {/* Floating Card - Stats */}
            <motion.div
              className="absolute -left-6 lg:-left-10 top-1/4 bg-white rounded-2xl shadow-xl p-5 border border-slate-100"
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">+127%</p>
                  <p className="text-sm text-slate-500">Revenue Growth</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Clients */}
            <motion.div
              className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-5 border border-slate-100"
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex -space-x-3 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />
                ))}
                <div className="h-10 w-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-indigo-600">+99</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-900">500+ Happy Clients</p>
              <p className="text-xs text-slate-500">Join our growing community</p>
            </motion.div>

            {/* Award Badge */}
            <motion.div
              className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
            >
              <Award className="h-8 w-8 text-yellow-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 font-display">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-slate-200" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
