import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatData {
  icon: string;
  num: number;
  suffix: string;
  label: string;
  fillPercent: number;
  description: string;
  decimal?: string;
}

const stats: StatData[] = [
  {
    icon: '🚀',
    num: 15,
    suffix: '+',
    label: 'Projects Shipped',
    fillPercent: 75,
    description: 'Production apps across fintech, SaaS & e-commerce',
  },
  {
    icon: '⏱',
    num: 3,
    suffix: 'yr',
    label: 'Experience',
    fillPercent: 50,
    description: 'Building scalable full-stack systems since 2022',
  },
  {
    icon: '⚙️',
    num: 10,
    suffix: '+',
    label: 'Technologies',
    fillPercent: 65,
    description: 'React, Node, MongoDB, Docker, AWS & more',
  },
  {
    icon: '✦',
    num: 99,
    suffix: '%',
    label: 'Uptime Delivered',
    fillPercent: 99,
    description: 'Zero-downtime deployments with containerized infra',
    decimal: '.9',
  },
];

const StatCard = ({ stat, index }: { stat: StatData; index: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.num / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.num) {
        setCount(stat.num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.num]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
    >
      {/* Icon */}
      <div className="text-3xl mb-4 transition-transform group-hover:scale-110 duration-300">{stat.icon}</div>

      {/* Number */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-syne text-5xl font-extrabold text-accent leading-none">
          {count}
          {stat.decimal && isVisible && <span className="text-3xl">{stat.decimal}</span>}
        </span>
        <span className="font-syne text-3xl font-bold text-accent/70">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="card-title mb-3">{stat.label}</div>

      {/* Progress Bar */}
      <div className="relative h-1 bg-border rounded-full mb-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: isVisible ? `${stat.fillPercent}%` : 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent2 rounded-full"
        />
      </div>

      {/* Description */}
      <p className="small-text text-muted leading-relaxed">{stat.description}</p>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative" id="stats">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            By The <span className="text-accent">Numbers</span>
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            Delivering consistent results through technical excellence and commitment to quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
