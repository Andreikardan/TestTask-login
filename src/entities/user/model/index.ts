export interface IUserInfo {
  username: string;
}

export interface ISignInData extends IUserInfo {
  email: string;
  password: string;
}
export interface ISignUpData extends ISignInData {
  confirmPassword: string;
}

export interface IAuthState extends IUserInfo {
  isAuthenticated: boolean;
}
