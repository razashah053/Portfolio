import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillGroups } from '../data/skills';

export default function About() {
  const sectionRef = useRef(null);
  const { isVisible } = useScrollReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="px-6 lg:px-12 py-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 section-label mb-4"
      >
        <div className="w-8 h-px bg-accent" />
        About Me
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="section-title mb-16"
      >
        Crafting digital
        <br />
        products that <span className="text-accent">matter.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left - Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-description space-y-5"
        >
          <p>
            I'm a software engineer with <strong className="text-text font-medium">3 years of experience</strong>{' '}
            building production-grade full-stack applications using React, Angular, and Node.js. I specialize in
            <strong className="text-text font-medium"> real-time communication systems</strong> powered by WebRTC and
            Socket.IO, delivering scalable solutions for video platforms and live chat applications.
          </p>
          <p>
            My approach: understand the business requirements first, design clean and maintainable architectures, and
            deliver iteratively with quality at the forefront. I'm equally comfortable{' '}
            <strong className="text-text font-medium">building responsive UIs</strong> with modern frameworks and{' '}
            <strong className="text-text font-medium">architecting backend APIs</strong> with Node.js and Express.
          </p>
          <p>
            Currently working at <strong className="text-text font-medium">ALTEGON</strong> as a Full Stack Engineer,
            I've developed video conferencing platforms, medical portals, and real-time messaging systems. I'm passionate
            about creating software that solves real problems and provides exceptional user experiences.
          </p>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-8"
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="section-label mb-3">{group.category}</div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="pill px-3.5 py-1.5 border border-border small-text text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.04)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
