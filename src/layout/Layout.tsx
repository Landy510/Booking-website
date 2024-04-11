import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Footer from './Footer/Footer';

export default Layout;

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
