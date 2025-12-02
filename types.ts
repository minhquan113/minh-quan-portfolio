export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    label: string;
    url: string;
    type: 'github' | 'external' | 'doc';
  }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}