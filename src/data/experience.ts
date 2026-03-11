import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    dateRange: 'Aug 2023 — Present',
    role: 'Full Stack Engineer',
    company: 'ALTEGON',
    description: 'Developed scalable full-stack applications using Angular, React, Node.js, and Express. Built real-time communication systems using WebRTC, Socket.IO, and Redis. Implemented secure authentication (JWT), Stripe billing integration, and deployed containerized applications using Docker and Nginx.',
    technologies: ['Angular', 'React', 'Node.js', 'TypeScript', 'WebRTC', 'Socket.IO', 'Redis', 'Docker', 'Stripe API'],
    achievements: [
      'Built Altegon Meet video conferencing platform with WebRTC and Socket.IO',
      'Implemented secure payment processing with Stripe integration',
      'Deployed and managed containerized applications using Docker and Nginx',
      'Reduced API response time by 40% through Redis caching strategies'
    ]
  },
  {
    id: 2,
    dateRange: 'Jan 2023 — July 2023',
    role: 'Junior React JS Developer',
    company: 'Veroke',
    description: 'Developed responsive React applications including enterprise dashboards and user platforms. Implemented role-based dashboards, authentication workflows, and business modules. Integrated REST APIs and optimized state management to improve performance and user experience.',
    technologies: ['React', 'JavaScript', 'Redux', 'REST APIs', 'Material-UI', 'Git'],
    achievements: [
      'Developed enterprise-level dashboards with complex data visualizations',
      'Implemented role-based access control for multi-tenant applications',
      'Improved application performance by 30% through state management optimization',
      'Collaborated with backend team to design and integrate REST APIs'
    ]
  },
];
