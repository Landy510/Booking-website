import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [showMultiLang, setShowMultiLang] = useState(false);
  return (
    <div className="side-menu container fixed z-[1] top-[62px] bottom-[0] left-[0] bg-black text-white-default">
      <nav>
        <ul>
          <li className="py-[1rem] border-white-default border-b-[1px] border-solid">
            <NavLink to="/">Sign Up</NavLink>
          </li>
          <li className="py-[1rem] border-white-default border-b-[1px] border-solid">
            <button
              className="w-full text-start"
              type="button"
              onClick={() => setShowMultiLang((prev) => !prev)}
            >
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
