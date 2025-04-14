import styles from './ProfileCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { Button } from '@/shared/ui/Button';
import { logout } from '@/entities/user/slice';
import { ROUTES } from '@/shared/enums/routes';

export function ProfileCard(): JSX.Element {
  const { username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout(): void {
    dispatch(logout());
    navigate(ROUTES.HOME);
  }

  return (
    <section>
      <h1 className={styles.title}>Карточка профиля</h1>
      <p className={styles.welcomeText}>Добро пожаловать, {username} !</p>

      <div className={styles.buttonContainer}>
        <Button color="red" text="Выход" onClick={handleLogout} />
      </div>
    </section>
  );
}
