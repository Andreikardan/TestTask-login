import { RuleObject } from 'antd/es/form';
import { EMAIL_REGEX, VALIDATE_ERROR_MESSAGES } from '@/shared/consts';

const { EMAIL, PASSWORD, CONFIRM_PASSWORD, USERNAME } = VALIDATE_ERROR_MESSAGES;

export class UserValidator {
  static validateRequired(value: string, errorMessage: string): void {
    if (!value || value.trim() === '') {
      throw new Error(errorMessage);
    }
  }

  static validateMinLength(value: string, min: number, errorMessage: string): void {
    if (value.trim().length < min) {
      throw new Error(errorMessage);
    }
  }

  static validateNoSpaces(value: string, errorMessage: string): void {
    if (value.includes(' ')) {
      throw new Error(errorMessage);
    }
  }

  static email(_: RuleObject, value: string): Promise<void> {
    try {
      this.validateRequired(value, EMAIL.REQUIRED);
      this.validateNoSpaces(value, EMAIL.NO_SPACES);

      if (!EMAIL_REGEX.test(value)) {
        throw new Error(EMAIL.INVALID_FORMAT);
      }

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static password(_: RuleObject, value: string): Promise<void> {
    try {
      this.validateRequired(value, PASSWORD.REQUIRED);
      this.validateMinLength(value, 8, PASSWORD.MIN_LENGTH);

      if (value.trim() === '') {
        throw new Error(PASSWORD.NO_SPACES);
      }

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static confirmPassword(getFieldValue: (name: string) => string) {
    return (_: RuleObject, value: string): Promise<void> => {
      try {
        this.validateRequired(value, CONFIRM_PASSWORD.REQUIRED);

        if (value !== getFieldValue('password')) {
          throw new Error(CONFIRM_PASSWORD.NOT_MATCH);
        }

        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    };
  }

  static username(_: RuleObject, value: string): Promise<void> {
    try {
      this.validateRequired(value, USERNAME.REQUIRED);
      this.validateMinLength(value, 2, USERNAME.MIN_LENGTH);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
