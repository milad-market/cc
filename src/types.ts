export type Language = 'fa' | 'en';

export interface Project {
  id: string;
  code: string;
  badge: string;
  badgeEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  metric: string;
  metricEn: string;
  demoType: 'dna-predict' | 'cell-sim' | 'ai-tutor';
}

export interface Milestone {
  year: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface Domain {
  id: string;
  domainNumber: string;
  badge: string;
  badgeEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  visualType: 'dna-microscopy' | 'neural-network';
}
