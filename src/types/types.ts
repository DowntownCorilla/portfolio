export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  thumbnail: string;
  role: string;
  teamSize: string;
  period: string;
  github: string;
  liveUrl: string;
  liveNotice?: string;
  techStack: string[];
  overview: string;
  contributions: string[];
  problems: string[];
  solutions: string[];
  screenshot: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  evidence?: {
    src: string;
    alt: string;
    caption: string;
  }[];
}
