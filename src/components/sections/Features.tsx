import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Zap, Shield, BarChart3, Users, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed with sub-second load times, smooth animations, and efficient resource management.',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Built with security-first approach including end-to-end encryption, SOC 2 compliance, and regular audits.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights with comprehensive dashboards, custom reports, and predictive analytics.',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Headphones,
    title: '24/7 Premium Support',
    description: 'Round-the-clock customer support with dedicated account managers and priority response times.',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools for teams of any size with real-time editing and commenting.',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Distributed infrastructure across 50+ data centers for worldwide availability and low latency.',
    color: 'from-cyan-400 to-teal-500',
    bgColor: 'bg-cyan-50',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Powerful Features for Modern Teams"
          description="Everything you need to build, scale, and manage your digital presence with confidence. Designed for businesses that demand excellence."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              variants={fadeInUp}
            >
              <div className={`relative h-full p-8 rounded-2xl ${feature.bgColor} hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-500`}>
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-slate-200/50 group-hover:text-slate-100 transition-colors font-display">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 pt-16 border-t border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '50ms', label: 'Avg Response Time' },
              { value: '500+', label: 'Enterprise Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
