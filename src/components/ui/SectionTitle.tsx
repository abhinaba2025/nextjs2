import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      className={cn('max-w-3xl mb-12', alignClasses[align], className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {subtitle && (
        <motion.p
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display',
          dark ? 'text-white' : 'text-slate-900'
        )}
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={cn(
            'mt-4 text-lg md:text-xl',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
