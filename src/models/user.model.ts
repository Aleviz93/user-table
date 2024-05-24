export interface User {
  id: number | null,
  email: string;
  fullName: string;
  phone?: string;
  department?: string;
  manager?: User;
}