import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/experience';

interface TimelineItemProps {
  experience: typeof experiences[0];
  delay?: number;
}

function TimelineItem({ experience, delay = 0 }: TimelineItemProps) {
  const itemRef = useRef(null);
  const { isVisible } = useScrollReveal(itemRef);
  const isLast = experience.id === experiences.length;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="grid grid-cols-[160px_1fr] gap-10 pb-14 relative"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-40 top-2 bottom-0 w-px bg-border" />
      )}

      {/* Dot marker */}
      <div className="absolute left-[155px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-accent z-10" />

      {/* Date */}
      <div className="text-[11px] text-muted text-right pr-10 pt-0.5 tracking-wider">
        {experience.dateRange}
      </div>

      {/* Content */}
      <div className="pl-8">
        <h3 className="font-syne text-lg font-bold mb-1 tracking-tight">{experience.role}</h3>
        <div className="text-xs text-accent mb-3 uppercase tracking-wider">{experience.company}</div>
        <p className="text-muted text-xs leading-relaxed">{experience.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const { isVisible } = useScrollReveal(sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="px-12 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent mb-4"
      >
        <div className="w-8 h-px bg-accent" />
        Career
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-syne text-[clamp(36px,4vw,56px)] font-extrabold tracking-[-2px] leading-none mb-16"
      >
        Where I've
        <br />
        <span className="text-accent">worked.</span>
      </motion.h2>

      <div className="max-w-3xl">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
