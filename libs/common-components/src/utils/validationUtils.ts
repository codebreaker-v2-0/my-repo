import { EMAIL_REGEX } from '../constants/regexConstants';
import { ValidationResponse } from '../types/ValidationTypes';

export const validateEmail = (email: string): ValidationResponse => {
  const isValidEmail = EMAIL_REGEX.test(email);
  if (isValidEmail) {
    return { isValid: true, errorMessage: null };
  }
  return {
    isValid: false,
    errorMessage: 'Please enter a valid email address',
  };
};
