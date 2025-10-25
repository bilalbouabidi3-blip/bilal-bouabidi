
export interface Teacher {
  id: number;
  name: string;
  subject: string;
  imageUrl: string;
}

export interface Subject {
  id: number;
  name: string;
  price: number;
}

export interface Level {
  id: number;
  name: string;
  subjects: Subject[];
}
