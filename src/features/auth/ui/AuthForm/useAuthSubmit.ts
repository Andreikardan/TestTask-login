import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES } from '@/shared/enums/routes';
import { login } from '@/entities/user/slice';
import { ISignUpData } from '@/entities/user/model';
import mockUsers from '@/shared/utils/mockUsers.json';

export const useAuthSubmit = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorization = (values: ISignUpData) => {
    if (location.pathname === ROUTES.LOGIN) {
      const checkUser = mockUsers.find(
        (el) => el.email === values.email && el.password === values.password
      );
      if (checkUser) {
        dispatch(login(checkUser.username));
        navigate(ROUTES.PROFILE);
      } else {
        message.error('Емеил или пароль введены неверно');
      }
    } else {
      const existsUser = mockUsers.some((el) => el.email === values.email);
      if (existsUser) {
        message.error('Пользователь с таким логином уже зарегистрирован');
        return false;
      }
      message.success(`Успешно зарегестрирован ${values.username}`);
      return true;
    }
    return false;
  };

  return { isAuthorization };
};