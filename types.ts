
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
}
