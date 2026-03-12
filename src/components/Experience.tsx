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
      className="grid grid-cols-1 lg:grid-cols-[160px_1fr_1fr] gap-6 lg:gap-10 pb-14 lg:pb-20 relative"
    >
      {/* Vertical line - Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute left-40 top-2 bottom-0 w-px bg-border" />
      )}

      {/* Vertical line - Mobile */}
      {!isLast && (
        <div className="lg:hidden absolute left-2 top-8 bottom-0 w-px bg-border" />
      )}

      {/* Dot marker - Desktop */}
      <div className="hidden lg:block absolute left-[155px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-accent z-10" />
      
      {/* Dot marker - Mobile */}
      <div className="lg:hidden absolute left-[3px] top-2 w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-accent z-10" />

      {/* Date - Desktop only */}
      <div className="hidden lg:block text-[11px] text-muted text-right pr-10 pt-0.5 tracking-wider">
        {experience.dateRange}
      </div>

      {/* Left Content - Main Info */}
      <div className="lg:pl-8 pl-8">
        {/* Mobile: Date + Company inline */}
        <div className="lg:hidden flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[10px] text-muted tracking-wider">{experience.dateRange}</span>
        </div>
        
        <h3 className="font-syne text-lg font-bold mb-1 tracking-tight">{experience.role}</h3>
        <div className="text-xs text-accent mb-3 uppercase tracking-wider">{experience.company}</div>
        <p className="text-muted text-xs leading-relaxed mb-4">{experience.description}</p>
        
        {/* Technologies */}
        {experience.technologies && (
          <div className="mb-4 lg:mb-0">
            <div className="text-[10px] uppercase tracking-wider text-muted/60 mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-subtle border border-border text-[10px] text-muted tracking-wide hover:border-accent/40 hover:text-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Right Content - Achievements (Desktop: separate column, Mobile: below) */}
      <div className="pl-8 lg:border-l lg:border-border">
        {experience.achievements && (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-accent mb-3">Key Achievements</div>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-2.5 text-muted text-xs leading-relaxed">
                  <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const { isVisible } = useScrollReveal(sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="px-6 lg:px-12 py-12 lg:py-32 bg-surface">
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
        className="font-syne text-[clamp(36px,4vw,56px)] font-extrabold tracking-[-2px] leading-none mb-12 lg:mb-20"
      >
        Where I've
        <br />
        <span className="text-accent">worked.</span>
      </motion.h2>

      <div className="max-w-full lg:max-w-5xl lg:mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
