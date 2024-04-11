import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

import logoImgUrl from '@/assets/images/ic-logo-aloha.svg';
import ToolTip from '@/shared/components/ToolTip';
import Sidebar from '../Sidebar/Sidebar';

function Header() {
  const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [isToolTipShow, setIsToolTipShow] = useState<boolean>(false);
  const [isSideMenuBtnClicked, setIsSideMenuBtnClicked] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  function calculateToolTipPosition(e: React.MouseEvent<EventTarget>) {
    const currentTarget = e.currentTarget as HTMLLIElement;
    const boundingRectValue = currentTarget.getBoundingClientRect();
    const xPos = Math.round(boundingRectValue.left + boundingRectValue.width / 2);
    const yPos = Math.round(boundingRectValue.top + boundingRectValue.height);
    setPos({ x: xPos, y: yPos });
    setIsToolTipShow(true);
  }

  useEffect(() => {
    document.addEventListener('click', hideToolTip);
    function hideToolTip(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (anchorRef.current && anchorRef.current.contains(target)) return;
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
              ref={anchorRef}
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
          onClick={() => setIsSideMenuBtnClicked((prev) => !prev)}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            className={[
              'flex',
              styles['hamburger-button'],
            ].join(' ')}
            htmlFor="activateSideMenu"
            aria-controls="sidebar-navigation"
            aria-expanded={isSideMenuBtnClicked ? 'true' : 'false'}
          >
            <svg
              className={styles.hamburger}
              viewBox="0 0 100 100"
              width="30"
            >
              <rect
                className={[styles.line, styles.top].join(' ')}
                width="80"
                height="10"
                x="10"
                y={isSideMenuBtnClicked ? '45' : '25'}
                rx="5"
              />
              <rect className={[styles.line, styles.middle].join(' ')} width="80" height="10" x="10" y="45" rx="5" />
              <rect
                className={[styles.line, styles.bottom].join(' ')}
                width="80"
                height="10"
                x="10"
                y={isSideMenuBtnClicked ? '45' : '65'}
                rx="5"
              />
            </svg>
          </label>
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
      <div>
        <input
          type="checkbox"
          id="activateSideMenu"
          className="hidden"
        />
        <Sidebar />
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
