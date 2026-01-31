import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { 
  Building2, 
  Rocket, 
  Palette, 
  User, 
  MousePointer, 
  ShoppingBag, 
  TrendingUp, 
  Lightbulb, 
  Minimize2, 
  Bot,
  ArrowUpRight
} from 'lucide-react';

const homeVariations = [
  {
    id: 'corporate',
    title: 'Corporate Business',
    description: 'Professional layout with trust-building elements and subtle animations',
    icon: Building2,
    path: '/',
    gradient: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-50',
  },
  {
    id: 'saas',
    title: 'SaaS Startup',
    description: 'Product-focused with pricing tables and conversion-driven design',
    icon: Rocket,
    path: '/home/saas',
    gradient: 'from-indigo-600 to-purple-700',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'agency',
    title: 'Creative Agency',
    description: 'Bold typography with asymmetric layouts and heavy motion effects',
    icon: Palette,
    path: '/home/agency',
    gradient: 'from-pink-600 to-rose-700',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Minimal and personality-driven with project showcase focus',
    icon: User,
    path: '/home/minimal',
    gradient: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'landing',
    title: 'Landing Page',
    description: 'Single-page marketing funnel with CTA-focused sections',
    icon: MousePointer,
    path: '/home/landing',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Showcase',
    description: 'Product storytelling with visual-first approach',
    icon: ShoppingBag,
    path: '/home/landing',
    gradient: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Growth metrics focused with charts and case studies',
    icon: TrendingUp,
    path: '/home/saas',
    gradient: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
  },
  {
    id: 'startup',
    title: 'Startup Product',
    description: 'Vision-driven design with roadmap and integrations',
    icon: Lightbulb,
    path: '/home/ai',
    gradient: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 'minimal',
    title: 'Minimal Modern',
    description: 'Editorial style with elegant white space and luxury feel',
    icon: Minimize2,
    path: '/home/minimal',
    gradient: 'from-gray-600 to-gray-800',
    bgColor: 'bg-gray-50',
  },
  {
    id: 'ai',
    title: 'AI / Tech Startup',
    description: 'Dark mode with futuristic visuals and particle animations',
    icon: Bot,
    path: '/home/ai',
    gradient: 'from-blue-600 to-indigo-800',
    bgColor: 'bg-blue-50',
  },
];

export function HomeSelector() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
            </span>
            10 Unique Homepage Designs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display mb-4">
            Explore All Home Variations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            NEXORA comes with 10 beautifully crafted homepage designs. Each with its own 
            unique style, animations, and purpose-built layouts.
          </p>
        </motion.div>

        {/* Homepage Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {homeVariations.map((home, index) => (
            <motion.div 
              key={home.id} 
              variants={fadeInUp}
              custom={index}
            >
              <Link to={home.path} className="group block h-full">
                <div className={`relative h-full p-6 rounded-2xl ${home.bgColor} border border-transparent hover:border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${home.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${home.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <home.icon className="h-7 w-7" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {home.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {home.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-white/80 flex items-center justify-center text-xs font-bold text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600">
            Can't decide? Start with our{' '}
            <Link to="/" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-4">
              Corporate Homepage
            </Link>
            {' '}or{' '}
            <Link to="/home/saas" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-4">
              SaaS Startup
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
