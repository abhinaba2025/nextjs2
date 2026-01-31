import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { portfolioItems, categories } from '@/data/portfolio';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Work"
          title="Featured Projects"
          description="Explore our portfolio of successful projects and see how we've helped businesses achieve their goals through innovative digital solutions."
        />

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link to={`/portfolio/${item.id}`} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl bg-slate-100">
                    {/* Image */}
                    <motion.div
                      className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {/* Category */}
                        <span className="inline-block self-start px-3 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-sm text-indigo-300 text-xs font-medium mb-3 border border-indigo-500/30">
                          {item.category}
                        </span>
                        
                        {/* Title */}
                        <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {item.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs text-slate-400 bg-white/10 backdrop-blur-sm px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Project Link */}
                        <div className="flex items-center gap-2 text-white font-medium text-sm">
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Top Right Badge */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ArrowUpRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
