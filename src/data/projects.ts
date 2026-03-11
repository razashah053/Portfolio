import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    num: '01',
    tags: ['Angular', 'Node.js', 'WebRTC', 'Stripe'],
    name: 'Altegon Meet',
    description: 'Full-stack video meeting platform with Node.js/Express backend and Angular frontend. Implemented secure auth, Stripe payments, meeting management, calendar integrations, recordings (FFmpeg), file uploads, and reporting with Docker deployment.',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    num: '02',
    tags: ['Node.js', 'Socket.IO', 'MariaDB', 'Firebase'],
    name: 'TradesChat App',
    description: 'Real-time chat and calling app with Node.js/Express backend. Features JWT auth, Socket.IO messaging, media uploads, Firebase notifications, Twilio calling integration, and RabbitMQ processing.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    num: '03',
    tags: ['Angular', 'Node.js', 'Stripe', 'WebSocket'],
    name: 'Friendly Faces',
    description: 'Full-stack platform with Angular and Node.js supporting authentication, Stripe subscriptions, real-time chat, booking workflows, and email notifications. Swagger-documented REST APIs with modular backend architecture.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    num: '04',
    tags: ['React', 'Node.js', 'WebSocket', 'Redis'],
    name: "What's The Vibe",
    description: 'Real-time web app using Node.js/Express REST APIs and TypeScript/React frontend. Implemented JWT authentication, room/user management, and real-time communication via WebSocket with Redis integration.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    num: '05',
    tags: ['React', 'WebRTC', 'Docker', 'Nginx'],
    name: 'Qryde',
    description: 'React-based real-time video calling web app with complete meeting flow. Integrated WebRTC library with socket-based signaling for reliable call coordination, containerized with Docker + Nginx for production deployment.',
    liveUrl: '#',
    githubUrl: '#',
  },
];

