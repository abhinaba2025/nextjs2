import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook,
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/services' },
    { label: 'Changelog', href: '/blog' },
    { label: 'Documentation', href: '/faq' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Press Kit', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '/about' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Newsletter', href: '/contact' },
    { label: 'Help Center', href: '/faq' },
    { label: 'Tutorials', href: '/blog' },
    { label: 'Support', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/privacy' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

const contactInfo = [
  { icon: Mail, text: 'hello@nexora.com', href: 'mailto:hello@nexora.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: 'San Francisco, CA 94102', href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
                Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-3">
                Stay Updated with NEXORA
              </h3>
              <p className="text-slate-400 text-lg max-w-lg">
                Subscribe to our newsletter and get the latest updates, tips, and exclusive offers delivered straight to your inbox.
              </p>
            </motion.div>
            <motion.form
              variants={fadeInUp}
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="text-white font-bold text-2xl font-display">N</span>
              </div>
              <span className="text-2xl font-bold font-display">NEXORA</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Premium multipurpose website template designed for businesses, SaaS startups, agencies, portfolios, and modern brands.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Product */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-white font-semibold text-lg mb-5">Product</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-white font-semibold text-lg mb-5">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-white font-semibold text-lg mb-5">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-white font-semibold text-lg mb-5">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
              <p>© {currentYear} NEXORA. All rights reserved.</p>
              <div className="hidden sm:block h-4 w-px bg-slate-700" />
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              Crafted with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for ThemeForest
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
