import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/animations/variants';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Award, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '12', label: 'Years Experience' },
  { value: '25+', label: 'Team Members' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client communication.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients to achieve the best possible outcomes.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay ahead of the curve by constantly exploring new technologies and methodologies.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'We deliver projects on time without compromising on quality or attention to detail.',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
];

export function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
                About Us
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                We Build Digital{' '}
                <span className="gradient-text">Experiences</span> That Matter
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600"
              >
                Founded in 2012, NEXORA has grown from a small startup to a leading digital agency, 
                helping businesses worldwide transform their online presence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                  Our Story
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  What started as a passion project between two college friends has evolved into 
                  a full-service digital agency with a global footprint. Our journey has been 
                  defined by our commitment to excellence and our unwavering focus on client success.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Today, we work with Fortune 500 companies, innovative startups, and everything 
                  in between. Our diverse team brings together expertise in design, development, 
                  marketing, and strategy to deliver comprehensive digital solutions.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We believe that great digital experiences are built on a foundation of 
                  understanding—understanding your business, your customers, and your goals. 
                  That's why we take the time to listen before we create.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-900">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                    {stat.value}
                  </p>
                  <p className="text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              subtitle="Our Values"
              title="What Drives Us"
              description="These core values guide everything we do and shape how we work with our clients."
            />

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="text-center p-6"
                  variants={fadeInUp}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <SectionTitle
              subtitle="Our Team"
              title="Meet the Experts"
              description="Our talented team of designers, developers, and strategists are here to bring your vision to life."
            />

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  className="group"
                  variants={fadeInUp}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
