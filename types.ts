
import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
