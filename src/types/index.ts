export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}

export interface Certificate {
    title: string;
    issuer: string;
    image: string;
}

export interface Technology {
    name: string;
    icon: string;
    category: string; 
}