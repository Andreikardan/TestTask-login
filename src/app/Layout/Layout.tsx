import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';

export function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

