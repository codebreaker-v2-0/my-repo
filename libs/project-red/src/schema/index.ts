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
  token: string;
}

export interface EmailNotFound {
  _typename: 'EmailNotFound';
}

export interface PasswordIncorrect {
  _typename: 'PasswordIncorrect';
}
// endregion
