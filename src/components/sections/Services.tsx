import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { services } from '@/data/services';
import { ArrowUpRight, Code, Palette, TrendingUp, Target, Smartphone, Cloud } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  palette: Palette,
  trendingUp: TrendingUp,
  target: Target,
  smartphone: Smartphone,
  cloud: Cloud,
};

const colorMap: Record<string, { gradient: string; bg: string }> = {
  'code': { gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50' },
  'palette': { gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-50' },
  'trendingUp': { gradient: 'from-green-500 to-emerald-600', bg: 'bg-green-50' },
  'target': { gradient: 'from-orange-500 to-amber-600', bg: 'bg-orange-50' },
  'smartphone': { gradient: 'from-purple-500 to-violet-600', bg: 'bg-purple-50' },
  'cloud': { gradient: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-50' },
};

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive Digital Solutions"
          description="From strategy to execution, we provide end-to-end services to help your business thrive in the digital landscape and achieve measurable results."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const colors = colorMap[service.icon] || { gradient: 'from-indigo-500 to-purple-600', bg: 'bg-indigo-50' };
            
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100">
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Background Image on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {IconComponent && <IconComponent className="h-7 w-7" />}
                        </div>
                        <motion.div
                          className="h-10 w-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-all duration-300"
                          whileHover={{ rotate: 45 }}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-slate-500">
                            <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Number Badge */}
                      <div className="absolute top-6 right-20 text-5xl font-bold text-slate-100 font-display group-hover:text-slate-200 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            View All Services
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
