export interface Toon {
  id?: string;
  title?: string;
  ownerId?: string;
  headCount?: number;
  timer?: number;
  image?: string;
  completed?: boolean;
  lockId?: string;
  createdAt?: string;
  name?: string;
  userId?: string;
  participants?: [
    {
      name?: string;
    },
  ];
}
