// region Params
export interface AdminLoginParams {
  email: string;
  password: string;
}
// endregion

// region Response
export type AdminLoginResponse =
  | AdminLoginResult
  | EmailNotFound
  | PasswordIncorrect;
// endregion

// region Types
export interface AdminLoginResult {
  _typename: 'AdminLoginResult';
  accessToken: string;
}

export interface EmailNotFound {
  _typename: 'EmailNotFound';
  email: string;
}

export interface PasswordIncorrect {
  _typename: 'PasswordIncorrect';
}
// endregion
