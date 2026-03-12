import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

interface ProjectCardProps {
  project: typeof projects[0];
  delay?: number;
}

function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const cardRef = useRef(null);
  const { isVisible } = useScrollReveal(cardRef);

  if (project.featured) {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
        className="project-card col-span-1 lg:col-span-2 bg-[#0a0a0a] p-6 lg:p-12 relative overflow-hidden group cursor-default transition-colors hover:bg-[#0e0e0e]"
      >
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <div className="font-syne text-[48px] lg:text-[64px] font-extrabold text-border leading-none mb-4 lg:mb-6 transition-colors group-hover:text-subtle">
              {project.num}
            </div>

            <div className="flex gap-2 flex-wrap mb-3 lg:mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-label bg-[rgba(232,255,71,0.08)] px-2.5 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="card-title mb-2 lg:mb-3">{project.name}</h3>
            <p className="card-description mb-6 lg:mb-8">{project.description}</p>

            <div className="flex gap-5">
              <a
                href={project.liveUrl}
                className="small-text text-muted transition-colors hover:text-accent flex items-center gap-2"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="small-text text-muted transition-colors hover:text-accent flex items-center gap-2"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
            </div>
          </div>

          {/* Animated bars visual */}
          <div className="bg-subtle border border-border rounded h-24 lg:h-60 relative overflow-hidden flex items-center justify-center">
            <div className="flex items-end gap-1.5 h-16 lg:h-36">
              {[40, 70, 55, 90, 65, 80, 45, 95, 60].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={isVisible ? { scaleY: 1 } : {}}
                  transition={{ duration: 2, delay: delay + 0.1 * (i + 1), ease: 'easeOut' }}
                  className="w-[18px] rounded-t origin-bottom"
                  style={{
                    height: `${height}%`,
                    background: 'linear-gradient(to top, #ff6b35, #e8ff47)',
                  }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(232,255,71,0.03), transparent 60%)',
              }}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="project-card bg-[#0a0a0a] p-4 lg:p-12 relative overflow-hidden group cursor-default transition-colors hover:bg-[#0e0e0e] min-h-0"
    >
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

      <div className="font-syne text-[48px] lg:text-[64px] font-extrabold text-border leading-none mb-4 lg:mb-6 transition-colors group-hover:text-subtle">
        {project.num}
      </div>

      <div className="flex gap-2 flex-wrap mb-3 lg:mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag-label bg-[rgba(232,255,71,0.08)] px-2.5 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="card-title mb-2 lg:mb-3">{project.name}</h3>
      <p className="card-description mb-4 lg:mb-8 line-clamp-3 lg:line-clamp-none">{project.description}</p>

      <div className="flex gap-5">
        <a
          href={project.liveUrl}
          className="small-text text-muted transition-colors hover:text-accent"
        >
          ↗ Live Demo
        </a>
        <a
          href={project.githubUrl}
          className="small-text text-muted transition-colors hover:text-accent"
        >
          ⌥ GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const { isVisible } = useScrollReveal(sectionRef);

  return (
    <section id="projects" ref={sectionRef} className="bg-surface px-6 lg:px-12 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 section-label mb-4"
      >
        <div className="w-8 h-px bg-accent" />
        Selected Work
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="section-title mb-10 lg:mb-16"
      >
        Things I've
        <br />
        <span className="text-accent">built.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
