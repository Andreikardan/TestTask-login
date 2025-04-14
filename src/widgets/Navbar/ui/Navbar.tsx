import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ROUTES } from '@/shared/enums/routes';

export function Navbar(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Button color="green" text="Главная" onClick={() => navigate(ROUTES.HOME)} />
      <Button color="green" text="Профиль" onClick={() => navigate(ROUTES.PROFILE)} />
      <Button color="green" text="Вход" onClick={() => navigate(ROUTES.LOGIN)} />
      <Button color="green" text="Регистрация" onClick={() => navigate(ROUTES.REGISTRATION)} />
    </div>
  );
}
