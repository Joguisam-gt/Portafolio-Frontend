export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    category: 'backend' | 'frontend' | 'fullstack';
    githubUrl: string;
}