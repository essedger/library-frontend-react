export interface ILogin {
  email: number;
  password: string;
}
export interface IRole {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  username?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  age?: number;
  timezone?: string;
  image?: string;
  confirmed?: boolean;
  phone?: string;
  country?: string;
  city?: string;
  favorite_books?: string[];
  roles: IRole[];
}
