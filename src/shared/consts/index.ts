export const inputsInitialState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
};

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const VALIDATE_ERROR_MESSAGES = {
  EMAIL: {
    REQUIRED: 'Email не должен быть пустым',
    NO_SPACES: 'Email не должен содержать пробелов!',
    INVALID_FORMAT: 'Введите email в формате example@domain.com'
  },
  PASSWORD: {
    REQUIRED: 'Пароль не должен быть пустым',
    MIN_LENGTH: 'Минимум 8 символов!',
    NO_SPACES: 'Пароль не может состоять только из пробелов!'
  },
  CONFIRM_PASSWORD: {
    REQUIRED: 'Подтвердите пароль!',
    NOT_MATCH: 'Пароли не совпадают!'
  },
  USERNAME: {
    REQUIRED: 'Пожалуйста, введите ваше имя!',
    MIN_LENGTH: 'Имя должно содержать минимум 2 символа!'
  }
};
