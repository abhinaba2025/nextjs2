export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and personal projects',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      '5 Projects',
      '10GB Storage',
      'Basic Analytics',
      'Email Support',
      'API Access',
      'Community Access',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing teams and businesses',
    price: {
      monthly: 79,
      yearly: 790,
    },
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'Full API Access',
      'Team Collaboration',
      'Custom Integrations',
      'White-label Options',
    ],
    highlighted: true,
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      'Everything in Professional',
      'Unlimited Storage',
      'Custom Analytics',
      '24/7 Dedicated Support',
      'Custom Development',
      'SLA Guarantee',
      'On-premise Deployment',
      'Security Audit',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];
