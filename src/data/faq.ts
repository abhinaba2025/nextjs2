export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What services does Nexora offer?',
    answer: 'Nexora offers a comprehensive range of digital services including web development, UI/UX design, mobile app development, brand strategy, digital marketing, and cloud solutions. We work with businesses of all sizes to create impactful digital experiences.',
    category: 'General',
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we provide detailed timelines tailored to your specific project requirements.',
    category: 'Process',
  },
  {
    id: '3',
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Our pricing is transparent and based on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your needs.',
    category: 'Pricing',
  },
  {
    id: '4',
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! We offer various support and maintenance packages to ensure your digital products continue to perform optimally. This includes regular updates, security patches, performance optimization, and feature enhancements.',
    category: 'Support',
  },
  {
    id: '5',
    question: 'What technologies do you work with?',
    answer: 'We specialize in modern technologies including React, Next.js, Vue.js, Node.js, Python, AWS, and more. We choose the best technology stack based on your specific project requirements and business goals.',
    category: 'Technical',
  },
  {
    id: '6',
    question: 'How do you handle project communication?',
    answer: 'We believe in transparent, frequent communication. You will have a dedicated project manager, access to our project management tools, weekly status updates, and regular check-in calls. We are always just a message away.',
    category: 'Process',
  },
  {
    id: '7',
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We often collaborate with in-house teams, providing specialized expertise where needed. We can augment your team or work alongside them to achieve your project goals.',
    category: 'General',
  },
  {
    id: '8',
    question: 'What industries do you specialize in?',
    answer: 'We have experience across various industries including fintech, healthcare, e-commerce, education, SaaS, and more. Our diverse portfolio allows us to bring cross-industry insights to every project.',
    category: 'General',
  },
];
