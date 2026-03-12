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
      className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 lg:gap-10 pb-14 lg:pb-20 relative"
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
      <div className="hidden lg:block small-text text-muted text-right pr-10 pt-0.5">
        {experience.dateRange}
      </div>

      {/* Main Content */}
      <div className="lg:pl-8 pl-8">
        {/* Mobile: Date */}
        <div className="lg:hidden flex items-center gap-2 mb-2 flex-wrap">
          <span className="small-text text-muted">{experience.dateRange}</span>
        </div>
        
        <h3 className="card-title mb-1">{experience.role}</h3>
        <div className="section-label mb-3">{experience.company}</div>
        <p className="card-description mb-4">{experience.description}</p>
        
        {/* Technologies */}
        {experience.technologies && (
          <div className="mb-4">
            <div className="small-text text-muted/60 mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-subtle border border-border small-text text-muted hover:border-accent/40 hover:text-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements - Mobile and tablet (hidden on xl+ where sidebar shows) */}
        {experience.achievements && (
          <div className="xl:hidden mt-6">
            <div className="section-label mb-3">Key Achievements</div>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-2.5 card-description">
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
    <section id="experience" ref={sectionRef} className="px-6 lg:px-12 py-16 lg:py-24 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 section-label mb-4"
      >
        <div className="w-8 h-px bg-accent" />
        Career
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="section-title mb-12 lg:mb-16"
      >
        Where I've
        <br />
        <span className="text-accent">worked.</span>
      </motion.h2>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8 xl:gap-12">
        {/* Timeline Section */}
        <div className="max-w-full">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} delay={index * 0.1} />
          ))}
        </div>

        {/* Key Highlights Section - Desktop only, sticky */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden xl:block"
        >
          <div className="sticky top-24">
            <h3 className="section-label mb-6">KEY HIGHLIGHTS</h3>
            <div className="space-y-4">
              {[
                {
                  icon: '⚡',
                  name: 'Real-Time Systems',
                  desc: 'Built WebRTC & Socket.IO communication systems handling concurrent multi-user sessions with sub-100ms latency.',
                },
                {
                  icon: '🔐',
                  name: 'Auth & Payments',
                  desc: 'Implemented JWT-based auth systems and Stripe billing integration across enterprise SaaS platforms.',
                },
                {
                  icon: '🚀',
                  name: 'Containerized Deployments',
                  desc: 'Dockerized and deployed full-stack apps with Nginx reverse proxy, achieving zero-downtime production releases.',
                },
                {
                  icon: '📊',
                  name: 'Enterprise Dashboards',
                  desc: 'Delivered role-based analytics dashboards with complex state management and optimized data fetching pipelines.',
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group flex gap-3 p-4 bg-[#0a0a0a] border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
                >
                  <div className="text-2xl transition-transform group-hover:scale-110 duration-300 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-syne text-sm font-semibold text-text mb-1.5">{highlight.name}</div>
                    <div className="small-text text-muted leading-relaxed">{highlight.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
