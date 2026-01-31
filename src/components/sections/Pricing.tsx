import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { pricingPlans } from '@/data/pricing';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Pricing"
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your needs. All plans include a 14-day free trial with no credit card required."
        />

        {/* Toggle */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors ${isYearly ? 'bg-indigo-600' : 'bg-slate-200'}`}
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md"
              animate={{ x: isYearly ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
            <span className="ml-2 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl shadow-indigo-500/30'
                  : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl'
              }`}>
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-400 text-slate-900 text-sm font-bold shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-xl font-bold mb-2 ${!plan.highlighted && 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-indigo-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-display">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={plan.highlighted ? 'text-indigo-200' : 'text-slate-500'}>
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className={`text-sm mt-1 ${plan.highlighted ? 'text-indigo-200' : 'text-green-600'}`}>
                      Save ${(plan.price.monthly * 12 - plan.price.yearly)} annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-white/20' : 'bg-indigo-100'
                      }`}>
                        <Check className={`h-3 w-3 ${plan.highlighted ? 'text-white' : 'text-indigo-600'}`} />
                      </div>
                      <span className={plan.highlighted ? 'text-indigo-50' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Need a Custom Enterprise Solution?
              </h3>
              <p className="text-slate-600 max-w-lg">
                We offer custom pricing and features for large organizations with specific requirements. 
                Contact our sales team for a personalized quote.
              </p>
            </div>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
