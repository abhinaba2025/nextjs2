export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    category: 'Technology',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
  },
  {
    id: 'design-systems-guide',
    title: 'Building Scalable Design Systems: A Complete Guide',
    excerpt: 'Learn how to create and maintain design systems that scale with your organization.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    author: {
      name: 'Jordan Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    category: 'Design',
    date: 'Mar 12, 2024',
    readTime: '12 min read',
  },
  {
    id: 'ai-product-development',
    title: 'Integrating AI into Your Product Development Process',
    excerpt: 'Discover practical strategies for leveraging AI to enhance your product development workflow.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    author: {
      name: 'Sam Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    category: 'AI & Tech',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
  },
  {
    id: 'startup-growth-strategies',
    title: '10 Growth Strategies Every Startup Should Know',
    excerpt: 'Proven tactics to accelerate your startup\'s growth and reach your target audience.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    author: {
      name: 'Taylor Swift',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    category: 'Business',
    date: 'Mar 8, 2024',
    readTime: '6 min read',
  },
];
