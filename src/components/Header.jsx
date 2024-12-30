"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo">Logo</Link>
            </div>
            <div className="header__col-02">
              <nav className="header__nav">
                <ul className="header__list">
                  <li className="header__item">
                    <Link href="/for-advertisers" className="header__link">For Advertisers</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/for-publishers" className="header__link">For Publishers</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/industry-focus" className="header__link">Industry Focus</Link>
                  </li>
                </ul>
              </nav>
              <button className="header__menu-btn">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 14C5 13.3787 5.50368 12.875 6.125 12.875H30.875C31.4963 12.875 32 13.3787 32 14C32 14.6213 31.4963 15.125 30.875 15.125H6.125C5.50368 15.125 5 14.6213 5 14ZM5 24.125C5 23.5037 5.50368 23 6.125 23H30.875C31.4963 23 32 23.5037 32 24.125C32 24.7463 31.4963 25.25 30.875 25.25H6.125C5.50368 25.25 5 24.7463 5 24.125Z" fill="#111827" />
                </svg>
              </button>
              <Link href="#" className="header__join">JOIN</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
