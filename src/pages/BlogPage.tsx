import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { blogPosts } from '@/data/blog';
import { ArrowRight } from 'lucide-react';

export function BlogPage() {
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
                Our Blog
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                Insights &{' '}
                <span className="gradient-text">Ideas</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600"
              >
                Stay up to date with the latest trends, tips, and insights from our team.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className={`group ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className={`grid ${index === 0 ? 'md:grid-cols-2' : ''} gap-6 items-center`}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className={`w-full object-cover ${index === 0 ? 'aspect-[4/3]' : 'aspect-video'}`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-700">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-slate-900">{post.author.name}</p>
                            <p className="text-sm text-slate-500">{post.date}</p>
                          </div>
                        </div>
                        <h2 className={`font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {post.title}
                        </h2>
                        <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <span className="inline-flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
