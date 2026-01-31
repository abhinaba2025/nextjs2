export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechFlow Inc.',
    content: 'Nexora transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The results speak for themselves - 150% increase in conversions.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupX',
    content: 'Working with Nexora was a game-changer for our startup. They understood our vision and delivered a product that perfectly represents our brand. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GlobalBrand',
    content: 'The team at Nexora brought creativity and technical expertise together beautifully. Our new website has significantly improved user engagement and brand perception.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    role: 'CTO',
    company: 'InnovateLabs',
    content: 'Exceptional technical prowess combined with stunning design. Nexora delivered our complex platform ahead of schedule with impeccable quality.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'DigitalFirst',
    content: 'From concept to launch, Nexora was a true partner. Their strategic insights and flawless execution made all the difference in our product success.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    rating: 5,
  },
];
