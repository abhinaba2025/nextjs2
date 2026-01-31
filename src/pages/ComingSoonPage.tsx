import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import { Button } from '@/components/ui/Button';

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-white font-display mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-indigo-200 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:40px_40px]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-30"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-12"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <span className="text-3xl font-bold text-white font-display">NEXORA</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display mb-6"
          >
            Something Amazing is{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-indigo-200 mb-12"
          >
            We're working hard to bring you something extraordinary. 
            Stay tuned for the big reveal.
          </motion.p>

          {/* Countdown */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-6 md:gap-12 mb-12"
          >
            <CountdownItem value={timeLeft.days} label="Days" />
            <div className="text-4xl md:text-6xl font-bold text-indigo-400">:</div>
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <div className="text-4xl md:text-6xl font-bold text-indigo-400">:</div>
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <div className="text-4xl md:text-6xl font-bold text-indigo-400 hidden md:block">:</div>
            <div className="hidden md:block">
              <CountdownItem value={timeLeft.seconds} label="Seconds" />
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp}>
            <p className="text-indigo-200 mb-4">
              Get notified when we launch:
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Button size="lg" className="whitespace-nowrap">
                Notify Me
              </Button>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.p
            variants={fadeInUp}
            className="mt-16 text-sm text-indigo-300"
          >
            © {new Date().getFullYear()} NEXORA. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
