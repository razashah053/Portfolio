export default function Marquee() {
  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Go',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'GraphQL',
    'REST APIs',
  ];

  // Duplicate array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="border-t border-b border-border overflow-hidden py-4 bg-subtle">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {duplicatedTechnologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-4 px-8 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="text-accent text-[8px]">✦</span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
