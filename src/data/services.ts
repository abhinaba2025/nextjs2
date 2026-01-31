export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
    icon: 'code',
    features: [
      'React & Next.js Development',
      'Custom CMS Solutions',
      'E-commerce Platforms',
      'Progressive Web Apps',
      'API Development',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality for exceptional experiences.',
    icon: 'palette',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Design Systems',
      'Mobile App Design',
      'Brand Identity',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and drive measurable results.',
    icon: 'trendingUp',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Management',
      'PPC Campaigns',
      'Email Marketing',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Comprehensive branding solutions that define your unique identity and market positioning.',
    icon: 'target',
    features: [
      'Brand Discovery',
      'Visual Identity',
      'Brand Guidelines',
      'Market Positioning',
      'Brand Messaging',
    ],
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    icon: 'smartphone',
    features: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter Apps',
      'App Store Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services for modern businesses.',
    icon: 'cloud',
    features: [
      'AWS & Azure Setup',
      'Cloud Migration',
      'CI/CD Pipelines',
      'Container Orchestration',
      'Performance Monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
];
