import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TestimonialCard } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { testimonials } from '@/data/testimonials';

export function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              >
                Testimonials
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                What Our{' '}
                <span className="gradient-text">Clients Say</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600"
              >
                Don't just take our word for it. Here's what our clients have to say.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial) => (
                <motion.div key={testimonial.id} variants={fadeInUp}>
                  <TestimonialCard
                    content={testimonial.content}
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    avatar={testimonial.avatar}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
