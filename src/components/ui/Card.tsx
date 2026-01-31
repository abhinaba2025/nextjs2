import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { cardVariants } from '@/animations/variants';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  dark?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  hover = true,
  glass = false,
  dark = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glass && !dark && 'glass',
        glass && dark && 'glass-dark',
        !glass && !dark && 'bg-white shadow-lg',
        !glass && dark && 'bg-slate-900 shadow-lg',
        hover && 'cursor-pointer',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover ? 'hover' : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <Card className={cn('group', className)}>
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </Card>
  );
}

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  className?: string;
  onClick?: () => void;
}

export function PortfolioCard({ image, title, category, className, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-2xl cursor-pointer',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-indigo-400 mb-1">{category}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  className?: string;
}

export function TestimonialCard({
  content,
  name,
  role,
  company,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-6 flex-1 text-lg text-slate-600 italic">"{content}"</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </Card>
  );
}

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  highlighted = false,
  cta,
  className,
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-3xl p-8 transition-all duration-300',
        highlighted
          ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl scale-105'
          : 'bg-white shadow-lg hover:shadow-xl',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-slate-900">
          Most Popular
        </div>
      )}
      <h3 className={cn('text-2xl font-bold mb-2', !highlighted && 'text-slate-900')}>
        {name}
      </h3>
      <p className={cn('mb-6', highlighted ? 'text-indigo-100' : 'text-slate-600')}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-5xl font-bold">${price}</span>
        <span className={cn('ml-2', highlighted ? 'text-indigo-200' : 'text-slate-500')}>
          /{period}
        </span>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className={cn(
                'h-5 w-5 flex-shrink-0',
                highlighted ? 'text-indigo-200' : 'text-indigo-500'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={highlighted ? 'text-indigo-50' : 'text-slate-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <motion.button
        className={cn(
          'w-full rounded-full py-4 font-semibold transition-all duration-300',
          highlighted
            ? 'bg-white text-indigo-600 hover:bg-indigo-50'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {cta}
      </motion.button>
    </motion.div>
  );
}
