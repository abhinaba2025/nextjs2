import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Rocket, Layers, ChevronRight, Zap } from 'lucide-react';

export function HeroStartup() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-slate-900 overflow-hidden text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
              </span>
              Now in Public Beta
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              Build your startup <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                at lightspeed
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
            >
              The complete toolkit for founders. Validate ideas, build MVPs, and scale 
              your product with our all-in-one development platform.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-bold w-full sm:w-auto">
                Get Early Access <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-white/10 w-full sm:w-auto">
                View Roadmap
              </Button>
            </motion.div>

            {/* Product Interface Preview */}
            <motion.div
              variants={fadeInUp}
              className="relative w-full aspect-video rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden"
            >
               {/* Browser Header */}
               <div className="h-12 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-2">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-700" />
                   <div className="w-3 h-3 rounded-full bg-slate-700" />
                   <div className="w-3 h-3 rounded-full bg-slate-700" />
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="w-64 h-6 rounded-md bg-slate-800" />
                 </div>
               </div>
               {/* Content Skeleton */}
               <div className="p-8 flex gap-8 h-full">
                  <div className="w-64 h-full border-r border-slate-800 space-y-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-slate-800" />
                         <div className="w-32 h-4 rounded bg-slate-800" />
                       </div>
                     ))}
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="flex gap-4 mb-8">
                       <div className="w-1/3 h-32 rounded-xl bg-slate-800/50" />
                       <div className="w-1/3 h-32 rounded-xl bg-slate-800/50" />
                       <div className="w-1/3 h-32 rounded-xl bg-slate-800/50" />
                    </div>
                    <div className="w-full h-64 rounded-xl bg-slate-800/30 border border-slate-700/50" />
                  </div>
               </div>
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 flex justify-center gap-8 text-slate-500 text-sm font-medium uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" /> Ship Faster
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" /> Scale Better
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" /> Grow Bigger
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
