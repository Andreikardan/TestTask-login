import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/enums/routes';
import { Layout } from '@/app/Layout';
import { AuthPage, HomePage, ProfilePage } from '@/pages';
import { PrivateRoute, PublicRoute, RouterErrorFallback } from '@/app/router';

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.HOME,
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />
        },
        {
          path: ROUTES.LOGIN,
          element: (
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          ),
          errorElement: <RouterErrorFallback />
        },
        {
          path: ROUTES.REGISTRATION,
          element: (
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          ),
          errorElement: <RouterErrorFallback />
        },
        {
          path: ROUTES.PROFILE,
          element: (
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          ),
          errorElement: <RouterErrorFallback />
        },
        {
          path: `*`,
          element: (
            <>
              <h1>404</h1>
              <h2>Такой урлы не нашлось</h2>
            </>
          )
        }
      ]
    }
  ],
  {
    basename: ROUTES.BASE_NAME
  }
);
