import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react';

export function HeroEcommerce() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-[#f8f5f2] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-orange-600 font-medium mb-6">
              <span className="bg-orange-100 px-3 py-1 rounded-full text-sm">New Collection 2024</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] font-display mb-6"
            >
              Redefine Your <br />
              <span className="text-orange-600">Everyday Style</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed"
            >
              Discover our latest collection of premium essentials designed for comfort, 
              durability, and timeless elegance.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-10">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="rounded-none border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10">
                View Lookbook
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200"
            >
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: ShieldCheck, label: 'Secure Payment' },
                { icon: Star, label: 'Top Rated' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"
                    alt="Fashion model"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-white p-6 flex items-center justify-center text-center">
                  <div>
                    <p className="text-3xl font-bold text-slate-900 mb-2">50%</p>
                    <p className="text-slate-500 uppercase tracking-wider text-sm">Summer Sale</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-orange-100 p-6 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-orange-500/50" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop"
                    alt="Fashion model"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-full shadow-xl z-20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">10k+ Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
