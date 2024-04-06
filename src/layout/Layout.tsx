import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

export default Layout;

function Layout() {
  return (
    <>
      <Header />
      <main>
        <input type="text" placeholder="Please enter your name" />
        <button type="button" className="btn-purple">Click Me</button>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
