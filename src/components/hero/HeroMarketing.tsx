import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { TrendingUp, PieChart, ArrowUpRight, Target } from 'lucide-react';

export function HeroMarketing() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
              <TrendingUp className="h-4 w-4" />
              <span>#1 Digital Marketing Agency</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] font-display mb-6"
            >
              Drive Growth with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Data-Driven</span> Marketing
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed"
            >
              We help ambitious brands scale their revenue through targeted strategies, 
              creative campaigns, and measurable results.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-blue-500/25">
                Get a Free Audit
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 pt-8 border-t border-slate-100"
            >
              <div>
                <p className="text-3xl font-bold text-slate-900 font-display">10x</p>
                <p className="text-sm text-slate-500">ROI Average</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-slate-900 font-display">250%</p>
                <p className="text-sm text-slate-500">Traffic Growth</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-slate-900 font-display">50M+</p>
                <p className="text-sm text-slate-500">Leads Generated</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visuals */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Campaign Performance</h3>
                  <p className="text-sm text-slate-500">Last 30 Days</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" /> +24.5%
                </div>
              </div>
              
              {/* Fake Chart Area */}
              <div className="h-48 flex items-end justify-between gap-2 mb-6">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-full bg-blue-100 rounded-t-sm relative group"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <PieChart className="h-5 w-5 text-orange-600" />
                </div>
                <span className="font-bold text-slate-900">Conversion</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">4.8%</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-5 w-5 text-purple-600" />
                </div>
                <span className="font-bold text-slate-900">Target Reached</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">98.2%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
