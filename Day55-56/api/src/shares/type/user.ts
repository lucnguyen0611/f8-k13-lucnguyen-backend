interface UserBaseI {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
  avatar: string | null;
  parentName: string;
  parentPhone: string;
}

export interface UserI extends UserBaseI {
  id: number;
}

// create or update
export interface UserReqI extends UserBaseI {}

// response
export interface UserResI extends UserI {}
