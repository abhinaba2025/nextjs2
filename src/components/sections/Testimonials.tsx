import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp } from '@/animations/variants';
import { testimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

function TestimonialCard({ 
  content, 
  name, 
  role, 
  company, 
  avatar 
}: { 
  content: string; 
  name: string; 
  role: string; 
  company: string; 
  avatar: string;
}) {
  return (
    <div className="h-full p-8 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col">
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
          <Quote className="h-6 w-6 text-indigo-600" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="flex-1 text-lg text-slate-700 leading-relaxed mb-6">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100"
        />
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="Trusted by Industry Leaders"
          description="Don't just take our word for it. Here's what our clients have to say about working with us and the results they've achieved."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-slate-300 !opacity-100',
              bulletActiveClass: '!bg-indigo-600',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 pt-12 border-t border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '150+', label: 'Projects Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 font-display mb-1">
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
