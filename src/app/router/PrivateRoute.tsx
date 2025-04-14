import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/shared/enums/routes';

export function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
}
