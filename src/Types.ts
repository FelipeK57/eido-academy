export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  resources: string[];
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  lessons: Lesson[];
}
