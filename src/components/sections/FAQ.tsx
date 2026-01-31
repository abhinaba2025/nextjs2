import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';
import { fadeInUp } from '@/animations/variants';
import { faqItems } from '@/data/faq';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, process, and how we can help your business grow."
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion items={faqItems} />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="h-14 w-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Our friendly support team 
                  is here to help you with any questions you might have.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Documentation', href: '/faq' },
                    { label: 'API Reference', href: '/services' },
                    { label: 'Community Forum', href: '/blog' },
                    { label: 'Status Page', href: '/about' },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href}
                        className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
