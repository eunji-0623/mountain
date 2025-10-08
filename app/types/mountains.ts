export interface Mountain {
  id: number;
  name: string;
  regionSido: string;
  regionSigungu: string;
  regionDetail: string;
  distance: number | null;
  difficulty: number;
  completed: number;
  imageUrl: string | null;
  height: number;
  comment: string | null;
  completedAt: string | null;
  createdAt?: string;
  updatedAt?: string;
}
