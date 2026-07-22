export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  role: string;
  comment: string;
  rating: number;
  avatarSeed: string;
}

export interface Bonus {
  id: number;
  number: string;
  title: string;
  format: string;
  value: string;
  objectionBreaker: string;
  objectionText: string;
  description: string;
  icon: string;
}

export interface Deliverable {
  id: number;
  badge: string;
  title: string;
  format: string;
  description: string;
  originalValue: string;
  icon: string;
}

export interface SampleRecipe {
  id: string;
  title: string;
  prepTime: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  instructions: string[];
  calories: string;
  antiInflammatoryScore: number;
}
