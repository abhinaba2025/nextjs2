import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Home Pages
import { HomePage } from '@/pages/HomePage';
import { HomeSaaS } from '@/pages/HomeSaaS';
import { HomeAgency } from '@/pages/HomeAgency';
import { HomeAI } from '@/pages/HomeAI';
import { HomeMinimal } from '@/pages/HomeMinimal';
import { HomeLanding } from '@/pages/HomeLanding';

// Other Pages
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { BlogPage } from '@/pages/BlogPage';
import { PricingPage } from '@/pages/PricingPage';
import { ContactPage } from '@/pages/ContactPage';
import { FAQPage } from '@/pages/FAQPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home Variations */}
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/home/saas" element={<PageWrapper><HomeSaaS /></PageWrapper>} />
          <Route path="/home/agency" element={<PageWrapper><HomeAgency /></PageWrapper>} />
          <Route path="/home/ai" element={<PageWrapper><HomeAI /></PageWrapper>} />
          <Route path="/home/minimal" element={<PageWrapper><HomeMinimal /></PageWrapper>} />
          <Route path="/home/landing" element={<PageWrapper><HomeLanding /></PageWrapper>} />
          <Route path="/home/portfolio" element={<PageWrapper><HomeMinimal /></PageWrapper>} />
          <Route path="/home/ecommerce" element={<PageWrapper><HomeLanding /></PageWrapper>} />
          <Route path="/home/marketing" element={<PageWrapper><HomeSaaS /></PageWrapper>} />
          <Route path="/home/startup" element={<PageWrapper><HomeAI /></PageWrapper>} />
          
          {/* Other Pages */}
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
          <Route path="/services/:slug" element={<PageWrapper><ServicesPage /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
          <Route path="/portfolio/:slug" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
          <Route path="/coming-soon" element={<PageWrapper><ComingSoonPage /></PageWrapper>} />
          
          {/* 404 */}
          <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
