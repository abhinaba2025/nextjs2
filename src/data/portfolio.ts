export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'Web Development',
    description: 'A comprehensive financial analytics dashboard with real-time data visualization and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    client: 'FinanceFlow Inc.',
    year: '2024',
  },
  {
    id: 'ecommerce-redesign',
    title: 'Luxury E-commerce Redesign',
    category: 'UI/UX Design',
    description: 'Complete redesign of a luxury fashion e-commerce platform focusing on conversion optimization.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Figma', 'User Research', 'E-commerce'],
    client: 'Maison Élégante',
    year: '2024',
  },
  {
    id: 'health-app',
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'HIPAA-compliant mobile application for patient engagement and telehealth services.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['React Native', 'Healthcare', 'HIPAA'],
    client: 'MedConnect',
    year: '2023',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Project Management',
    category: 'Web Development',
    description: 'Enterprise project management solution with team collaboration features and integrations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'WebSocket'],
    client: 'TeamSync',
    year: '2023',
  },
  {
    id: 'brand-identity',
    title: 'Tech Startup Branding',
    category: 'Brand Strategy',
    description: 'Complete brand identity development for an AI-powered automation startup.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['Branding', 'Logo Design', 'Guidelines'],
    client: 'AutomateAI',
    year: '2023',
  },
  {
    id: 'travel-platform',
    title: 'Travel Booking Platform',
    category: 'Web Development',
    description: 'Modern travel booking platform with AI-powered recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Python', 'ML'],
    client: 'Wanderlust',
    year: '2023',
  },
];

export const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Development', 'Brand Strategy'];
