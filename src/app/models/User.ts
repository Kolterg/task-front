export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  password?: string;
  repeat_password?: string;
}
