import React from 'react';
import type { Skill, Experience, Project } from './types';

// SVG Icons for Skills
const CppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M14.5 3.5c-.3 0-.5.1-.7.3l-6 6c-.4.4-.4 1 0 1.4l6 6c.2.2.4.3.7.3s.5-.1.7-.3l6-6c.4-.4.4-1 0-1.4l-6-6c-.2-.2-.4-.3-.7-.3zm-1.5 7.5l-3-3 4.5-4.5 3 3-4.5 4.5zm-3-1.5l3-3 1.5 1.5-3 3-1.5-1.5zm4.5 4.5l-3-3 1.5-1.5 3 3-1.5 1.5zm0-3l-3-3 1.5-1.5 3 3-1.5-1.5zM3 15.5V8.5c0-1.7 1.3-3 3-3h.5v2H6c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-.5h2v.5c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3z"/></svg>;
const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.5 13.5v-3h-3v-2h5v5h-2zm-1.5 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm.5-13c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3zm-10 0c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3z"/></svg>;
const JsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M15.5 2.5h-7c-1.7 0-3 1.3-3 3v13c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3v-13c0-1.7-1.3-3-3-3zm-4.5 15c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4zm4 0c0 .6-.4 1-1 1s-1-.4-1-1v-1.5c0-.6-.4-1-1-1s-1 .4-1 1v.5c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v1.5c0 .6.4 1 1 1s1-.4 1-1v-.5c0-.6.4-1 1-1s1 .4 1 1v4z"/></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-3.5-8c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5zm7.4-2.9c-.3-.3-.8-.3-1.1 0l-1.4 1.4c-.3.3-.3.8 0 1.1l2.5 2.5c.3.3.8.3 1.1 0l1.4-1.4c.3-.3.3-.8 0-1.1l-2.5-2.5zm-11.3 2.5c.3-.3.3-.8 0-1.1l-1.4-1.4c-.3-.3-.8-.3-1.1 0l-2.5 2.5c-.3.3-.3.8 0 1.1l1.4 1.4c.3.3.8.3 1.1 0l2.5-2.5zM12 5.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/></svg>;
const NextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M15 4H9v2h6V4zm-2.5 16h-1c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4l5-5c.2-.2.4-.3.7-.3h1c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1zm-3.5-6l-3.5-3.5 3.5-3.5v7zm10.5-4.7l-5-5c-.2-.2-.4-.3-.7-.3h-1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h1c.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4zm-1.5 0l-3.5 3.5v-7l3.5 3.5z"/></svg>;
const NodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M20.9 9.3l-7.2-4.1c-.5-.3-1.1-.3-1.6 0l-7.2 4.1c-.6.3-1 .9-1 1.6v8.2c0 .7.4 1.3 1 1.6l7.2 4.1c.5.3 1.1.3 1.6 0l7.2-4.1c.6-.3 1-1 1-1.6v-8.2c0-.7-.4-1.3-1-1.6zm-8.9 10.9V14c0-.6-.4-1-1-1s-1 .4-1 1v6.2l-5.2-3V8.1l6.2 3.6v6.2c0 .6.4 1 1 1s1-.4 1-1v-6.2l3-1.7-2-1.2-4.2 2.4c-.6.3-1.2.1-1.5-.4s-.1-1.2.4-1.5l5.2-3 5.2 3v8.2l-5.2 3z"/></svg>;
const MongoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 16.9c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c1.2 0 2.4.4 3.3 1.1.3-.8.6-1.5 1-2.2-.7-.5-1.5-.7-2.3-.7-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2c.8 0 1.6-.2 2.3-.7-.4-.7-.7-1.4-1-2.2-1 .7-2.1 1.1-3.3 1.1z"/></svg>;
const PostgreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15v-5h2v5h-2zm-1-7V8h4v2h-4zm6 7h-2v-5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v5H8v-7c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v7z"/></svg>;
const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-3.5 12.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-3.5-4c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/></svg>;
const GitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.4 14.4c-.4.4-.9.4-1.3 0l-3.1-3.1-1.3 1.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2.1-2.1c-.4-.4-.4-1 0-1.4l2.1-2.1c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-1.3 1.3 3.1 3.1c.4.4.4.9 0 1.3z"/></svg>;

// Social Icons
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/priyanka-kataria', icon: <GithubIcon /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/priyanka-kataria-4a4aba255/', icon: <LinkedinIcon /> },
    { name: 'Leetcode', url: 'https://leetcode.com/u/priyankaiitd22/', icon: <CodeIcon /> },
];

export const SKILLS_DATA: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'C++', icon: <CppIcon /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'React Native', icon: <ReactIcon /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <NodeIcon /> },
      { name: 'Supabase', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM12 6l-4 8h8l-4-8z"/></svg> },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'PostgreSQL', icon: <PostgreIcon /> },
      { name: 'Git & GitHub', icon: <GitIcon /> },
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'InSeconds.App',
    duration: 'June 2025 - August 2025',
    description: [
      'Developed a cross-platform Flutter app with Node.js and Supabase.',
      'Improved large video upload speed using Redis and Cloudflare R2.',
      'Built real-time chat and notifications using WebSockets.',
      'Optimized reel load time by ~40% through performance tuning.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'HomeScanner',
    duration: 'April 2023 - June 2024',
    description: [
      'Created the “Family App” frontend using React Native.',
      'Developed a responsive and user-friendly mobile UI.',
      'Integrated frontend features with backend REST APIs.',
    ],
  },
  {
    role: 'Junior Engineer, Electrical',
    company: 'Axlr8r Formula Racing',
    duration: 'April 2023 - June 2024',
    description: [
      'Designed and assembled 5+ PCBs for EV subsystems.',
      'Enhanced DC-DC design, reducing vehicle weight by 0.7%.',
      'Contributed to securing 15th place globally at FSG.',
    ],
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'Doctor App',
    description: 'A comprehensive healthcare platform built with the MERN stack, enabling secure appointment scheduling, patient management',
    tags: ['MERN', 'Socket.IO', 'JWT', 'MongoDB'],
    imageUrl: '/assests/Doctor.png',
    repoUrl: 'https://github.com/priyanka-kataria/DoctorApp',
    liveUrl: 'https://doctor-app-rh82.vercel.app/',
  },
  {
    title: 'EarlyEra- A Ecommerce Platform',
    description: 'A full-stack, real-time chat service built with the MERN stack. Features instant messaging, online status indicators, and robust JWT-based authentication.',
    tags: ['Vite', 'ReactJS', 'JavaScript', 'CSS' ],
    imageUrl: '/assests/ecom.png',
    repoUrl: 'https://github.com/priyanka-kataria/EarlyEra_Ecommerce_website',
    liveUrl: 'https://earlyera.netlify.app/',
  },
  {
    title: 'Forecasting Electricity Prices Using LSTM',
    description: 'A time series forecasting project that predicts future electricity prices using an LSTM-based deep learning model. The workflow includes data cleaning, feature engineering, model training, and performance visualization to capture long-term patterns and trends in electricity price fluctuations.',
    tags: ['ML', 'Python', 'LSTM', 'Time-Series Analysis'],
    imageUrl: '/assests/lstm.png',
    repoUrl: 'https://github.com/priyanka-kataria/Forecasting-Electricity-Prices-Using-LSTM-Based-Time-Series-Analysis-/blob/main/esl372_notebook_2022ES11812_priyanka_kataria.ipynb',
  },
    {
    title: 'Inseconds App',
   description: 'InSeconds is a productivity-focused social app that turns short reels into real opportunities. Through our RAAS (Reel-as-a-Service) model, companies share video JDs and job seekers create video resumes, making hiring faster. The app also offers career tips, insights, messaging, and community features — helping users grow and find opportunities in seconds.',
    tags: ['SQL', 'Node.Js', 'Flutter', 'Cloudflare R2', 'Redis', 'Supabase'],
    imageUrl: '/assests/inseconds.png',
 
    liveUrl: 'https://play.google.com/store/apps/details?id=app.inseconds.insecondsapp',
  }
];