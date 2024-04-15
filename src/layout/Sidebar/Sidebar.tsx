import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [showMultiLang, setShowMultiLang] = useState(false);
  return (
    <div className="side-menu container fixed top-[62px] bottom-[0] left-[0] bg-black text-white">
      <nav>
        <ul>
          <li className="py-[1rem]">
            <NavLink to="/">Sign Up</NavLink>
          </li>
          <li className="py-[1rem]">
            <button type="button" onClick={() => setShowMultiLang((prev) => !prev)}>
              <span className="material-symbols-outlined">language</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <ul className={
              [
                showMultiLang ? '' : 'hidden',
                'ml-[2rem]',
              ].join(' ')
            }
            >
              <li className="py-[1rem]">English</li>
              <li className="py-[1rem]">繁體中文</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
