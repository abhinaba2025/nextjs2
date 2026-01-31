import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Brain, Cpu, Network, Sparkles, Zap, Bot, ArrowRight, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

function Particle({ delay }: { delay: number }) {
  const randomLeft = Math.random() * 100;
  const randomTop = Math.random() * 100;
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-indigo-400 rounded-full"
      style={{
        left: `${randomLeft}%`,
        top: `${randomTop}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -60],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

function NeuralNetwork() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Nodes */}
      <motion.circle cx="15" cy="25" r="1.5" fill="#818cf8" 
        animate={{ opacity: [0.3, 1, 0.3] }} 
        transition={{ duration: 2, repeat: Infinity }} 
      />
      <motion.circle cx="45" cy="15" r="1.5" fill="#818cf8" 
        animate={{ opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} 
      />
      <motion.circle cx="75" cy="30" r="1.5" fill="#818cf8" 
        animate={{ opacity: [0.4, 1, 0.4] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} 
      />
      <motion.circle cx="25" cy="60" r="1.5" fill="#a78bfa" 
        animate={{ opacity: [0.3, 1, 0.3] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} 
      />
      <motion.circle cx="60" cy="70" r="1.5" fill="#a78bfa" 
        animate={{ opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} 
      />
      <motion.circle cx="85" cy="55" r="1.5" fill="#818cf8" 
        animate={{ opacity: [0.4, 1, 0.4] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} 
      />
      <motion.circle cx="50" cy="85" r="1.5" fill="#a78bfa" 
        animate={{ opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} 
      />
      
      {/* Connections */}
      <motion.line x1="15" y1="25" x2="45" y2="15" stroke="#818cf8" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.line x1="45" y1="15" x2="75" y2="30" stroke="#818cf8" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.line x1="15" y1="25" x2="25" y2="60" stroke="#a78bfa" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.line x1="75" y1="30" x2="85" y2="55" stroke="#818cf8" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
      <motion.line x1="25" y1="60" x2="60" y2="70" stroke="#a78bfa" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
      />
      <motion.line x1="60" y1="70" x2="50" y2="85" stroke="#a78bfa" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
      />
      <motion.line x1="85" y1="55" x2="60" y2="70" stroke="#818cf8" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.9 }}
      />
    </svg>
  );
}

export function HeroAI() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Revolutionizing Industries with AI';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Brain, label: 'Neural Networks', desc: 'Advanced ML models' },
    { icon: Cpu, label: 'Edge Computing', desc: 'Real-time processing' },
    { icon: Network, label: 'Deep Learning', desc: 'Pattern recognition' },
    { icon: Bot, label: 'Automation', desc: 'Intelligent workflows' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#030712]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <NeuralNetwork />
        <div className="particles-bg">
          {[...Array(25)].map((_, i) => (
            <Particle key={i} delay={i * 0.15} />
          ))}
        </div>
      </div>

      {/* Gradient Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[200px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              Next-Generation AI Technology Platform
            </span>
            <Zap className="h-4 w-4 text-purple-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-display mb-6"
          >
            <span className="block mb-2">The AI Platform</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-indigo-400"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Harness the power of artificial intelligence to automate workflows, 
            generate actionable insights, and build intelligent applications that scale with your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button size="lg" icon className="glow shadow-xl shadow-indigo-500/25">
              Launch Console
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-700 text-white hover:bg-slate-800"
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-16"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              Enterprise Security
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              99.99% Uptime
            </span>
            <span className="flex items-center gap-2">
              <Network className="h-4 w-4 text-blue-400" />
              Global Infrastructure
            </span>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {feature.label}
                </h3>
                <p className="text-xs text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech Partners */}
        <motion.div
          className="mt-20 pt-10 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-center text-xs text-slate-600 mb-8 uppercase tracking-widest">
            Powering the world's most innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-40">
            {['OpenAI', 'NVIDIA', 'Google Cloud', 'Microsoft Azure', 'AWS'].map((brand) => (
              <span 
                key={brand} 
                className="text-lg md:text-xl font-bold text-slate-500 font-display hover:text-white transition-colors cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
