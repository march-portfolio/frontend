"use client";

import Link from "next/link";
import "./navbar/navbar.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const currentPath = usePathname();
  const [openMenu, setMenu] = useState<boolean>(false);
  const navList = [
    {
      name: "Work",
      path: "/pages/works",
    },
    {
      name: "Contact",
      path: "/pages/contact",
    },
    {
      name: "About",
      path: "/pages/about",
    },
  ];

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="mainpage">
          <Link className="marchtanu" href="/">
            MarchTanu
          </Link>
        </div>

        <button
          type="button"
          className="menu"
          aria-expanded={openMenu}
          onClick={() => setMenu(!openMenu)}
        >
          <span className="marchtanu">MarchTanu</span>
          <i className={`bi ${openMenu ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
        </button>

        <div className={`nav_dropdown_${openMenu}`}>
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setMenu(false)}
              className={item.path === currentPath ? "items active" : "items"}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="navlist">
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={item.path === currentPath ? "items active" : "items"}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {openMenu && <div className="nav_dropdown_bg" onClick={() => setMenu(false)} />}
    </>
  );
}

export default NavBar;
