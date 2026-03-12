import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden" id="home">
      {/* Background orbs */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full top-[20%] right-[10%] opacity-100 pointer-events-none z-0"
        style={{
          background: 'rgba(232,255,71,0.04)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bottom-[20%] left-[5%] opacity-100 pointer-events-none z-0"
        style={{
          background: 'rgba(255,107,53,0.04)',
          filter: 'blur(80px)',
        }}
      />

      {/* Left column */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12 pt-20 sm:py-16 sm:pt-24 lg:py-20 lg:pt-32 relative z-10"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-subtle border border-border px-4 py-1.5 rounded-sm text-[11px] text-accent uppercase tracking-widest mb-10 w-fit"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Available for hire
        </motion.div>

        <motion.h1 variants={item} className="font-syne font-extrabold text-[clamp(52px,6vw,88px)] leading-[0.95] tracking-[-3px] mb-8">
          <span className="block">Software</span>
          <span className="block text-accent">Engineer</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: '1px #f0f0f0',
              color: 'transparent',
            }}
          >
            Full-Stack
          </span>
        </motion.h1>

        <motion.p variants={item} className="max-w-md text-muted text-[13px] leading-relaxed mb-12">
          Results-driven Software Engineer with 3+ years of experience designing scalable full-stack applications using
          React, Angular, Node.js, and WebRTC. Passionate about building real-time communication systems and
          production-ready applications.
        </motion.p>

        <motion.div variants={item} className="flex gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-[#0a0a0a] text-xs uppercase tracking-wider font-medium relative overflow-hidden transition-colors"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">View Work ↗</span>
            <span className="absolute inset-0 bg-accent2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-text text-xs uppercase tracking-wider border border-border hover:border-accent hover:text-accent transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-20 flex gap-12 border-t border-border pt-8">
          {[
            { num: '15+', label: 'Projects Shipped' },
            { num: '3+ yrs', label: 'Experience' },
            { num: '10+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-syne text-4xl font-extrabold text-accent leading-none">{stat.num}</div>
              <div className="text-[11px] text-muted uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right column - Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 pt-8 sm:py-16 sm:pt-24 lg:py-20 lg:pt-32 relative z-10"
      >
        <div className="bg-surface border border-border rounded-lg w-full max-w-lg overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),_0_0_0_1px_rgba(255,255,255,0.03)] relative">
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-[20%] right-[20%] h-px opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent, #e8ff47, transparent)',
            }}
          />

          {/* Terminal bar */}
          <div className="px-4 py-3.5 bg-subtle border-b border-border flex items-center gap-2">
            <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#28ca42]" />
            <div className="text-[11px] text-muted mx-auto">raza@portfolio:~</div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-[12.5px] leading-relaxed">
            <div className="text-[#555]">// raza_shah.profile.ts</div>
            <div className="mt-3">
              <span className="text-[#ff79c6]">const</span>{' '}
              <span className="text-[#8be9fd]">developer</span> = {'{'}
            </div>
            <div className="pl-5">
              <span className="text-[#8be9fd]">name</span>: <span className="text-[#f1fa8c]">"Syed Raza Ur Rehman Shah"</span>,
            </div>
            <div className="pl-5">
              <span className="text-[#8be9fd]">role</span>:{' '}
              <span className="text-[#f1fa8c]">"Software Engineer"</span>,
            </div>
            <div className="pl-5">
              <span className="text-[#8be9fd]">stack</span>: [
            </div>
            <div className="pl-10">
              <span className="text-[#f1fa8c]">"React"</span>, <span className="text-[#f1fa8c]">"Angular"</span>,
            </div>
            <div className="pl-10">
              <span className="text-[#f1fa8c]">"Node.js"</span>, <span className="text-[#f1fa8c]">"TypeScript"</span>,
            </div>
            <div className="pl-10">
              <span className="text-[#f1fa8c]">"WebRTC"</span>, <span className="text-[#f1fa8c]">"Docker"</span>,
            </div>
            <div className="pl-5">],</div>
            <div className="pl-5">
              <span className="text-[#8be9fd]">experience</span>: <span className="text-[#e8ff47]">3</span>,
            </div>
            <div className="pl-5">
              <span className="text-[#8be9fd]">location</span>: <span className="text-[#f1fa8c]">"Islamabad, PK"</span>,
            </div>
            <div className="pl-5">
              <span className="text-[#50fa7b]">hire</span>(): <span className="text-[#ff79c6]">boolean</span> {'{'}
            </div>
            <div className="pl-10">
              <span className="text-[#ff79c6]">return</span> <span className="text-[#bd93f9]">true</span>;
            </div>
            <div className="pl-5">{'}'}</div>
            <div>{'}'}</div>
            <div className="mt-3">
              <span className="text-[#555]">// Output:</span>{' '}
              <span className="text-[#f1fa8c]">"Let's build something."</span>
              <span className="inline-block w-2 h-3.5 bg-accent align-bottom animate-[blink_1s_step-end_infinite] ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
