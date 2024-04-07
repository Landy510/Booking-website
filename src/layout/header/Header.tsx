import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import logoImgUrl from '@/assets/images/ic-logo-aloha.svg';
import ToolTip from '@/shared/components/ToolTip';

function Header() {
  const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [isToolTipShow, setIsToolTipShow] = useState<boolean>(false);

  function calculateToolTipPosition(e: React.MouseEvent<EventTarget>) {
    const elTarget = e.target as HTMLLIElement;
    const boundingRectValue = elTarget.getBoundingClientRect();
    const xPos = Math.round(boundingRectValue.left + boundingRectValue.width / 2);
    const yPos = Math.round(boundingRectValue.top + boundingRectValue.height);
    setPos({ x: xPos, y: yPos });
    setIsToolTipShow(true);
  }

  useEffect(() => {
    document.addEventListener('click', hideToolTip);
    function hideToolTip() {
      setIsToolTipShow(false);
    }

    return (function cleanUpFnc() { document.removeEventListener('click', hideToolTip); });
  }, []);

  return (
    <nav className="container">
      <div className="hidden md:flex items-center">
        <NavLink to="/">
          <img
            src={logoImgUrl}
            alt=""
            className="block py-[26px]"
          />
        </NavLink>
        <ul className="flex ml-auto mx-[-1.5rem]">
          <li>
            <button
              type="button"
              onClick={calculateToolTipPosition}
              onMouseEnter={calculateToolTipPosition}
            >
              <NavLink
                to="/"
                className="px-[1.5rem] py-[26px] block"
              >
                <span className="material-symbols-outlined">language</span>
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </NavLink>
            </button>
          </li>
          <li>
            <NavLink to="/" className="px-[1.5rem] py-[26px] block">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="px-[1.5rem] py-[26px] block">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center py-[1rem] md:hidden">
        <button
          type="button"
          className="flex"
        >
          <span className="material-symbols-outlined"> menu </span>
        </button>
        <NavLink to="/">
          <img
            src={logoImgUrl}
            alt=""
          />
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
      <ToolTip
        isShow={isToolTipShow}
        pos={pos}
      >
        <ul className="text-center px-[1rem]">
          <li className="py-[1rem]">English</li>
          <li className="py-[1rem]">繁中</li>
        </ul>
      </ToolTip>
    </nav>
  );
}

export default Header;
