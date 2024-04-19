import { Link } from 'react-router-dom';

import LanguageList from './components/LanguageList';
import CurrencyList from './components/CurrencyList';

function Footer() {
  return (
    <footer className="container py-[1rem] flex flex-col md:flex-row">
      <p className="text-grey order-1 mt-[1rem] md:mt-[0rem] md:order-none">
        Copyright © 1995-2024 Landy Inc.
      </p>
      <ul className="flex text-grey mx-[-0.5rem] md:mx-auto">
        <li className="px-[0.5rem]">
          <Link to="/">Terms</Link>
        </li>
        <li className="px-[0.5rem]">
          <Link to="/">About Us</Link>
        </li>
        <li className="px-[0.5rem]">
          <Link to="/">Privacy</Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <LanguageList />
        <CurrencyList />
      </div>
    </footer>
  );
}

export default Footer;
