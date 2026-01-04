export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  tags: string[];
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface LearningModule {
  title: string;
  description: string;
  keyTopics: string[];
  estimatedHours: number;
}

export interface GeneratedCurriculum {
  role: string;
  summary: string;
  modules: LearningModule[];
}
