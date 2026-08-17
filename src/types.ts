export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  challenge?: string;
  solution?: string;
  materiality?: string;
  technicalSpecs?: {
    label: string;
    value: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}
