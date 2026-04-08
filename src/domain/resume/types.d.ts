
export interface Language {
  name: string;
  proficiency: string;
}

export interface WorkExperience {
  jobTitle: string;
  companyName: string;
  period: string;
  location: string;
  description: string;
  descriptions?: string[];
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}