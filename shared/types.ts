export type Role = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';

export interface AuthUser {
  id: string;
  email: string;
  role: Role;
}
