"use client";

import Link from "next/link";
import "./navbar/navbar.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const currentPath = usePathname();
  const [OpenMenu, setMenu] = useState<boolean>(false);
  const NavList = [
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
      <div className="navbar">
        <div className="mainpage">
          <Link className="marchtanu" href="/"> MarchTanu </Link>
        </div>
        <div className="menu" onBlur={() => setMenu(false)} onClick={() => setMenu(!OpenMenu)}>
          <div className="marchtanu">MarchTanu</div>
          <i className="bi bi-caret-down-fill"></i>
        </div>
        <div className={"nav_dropdown_" + OpenMenu}>
          {NavList.map((item, index) => (
            <Link
              key={index}
              href={`${item["path"]}`}
              className={item["path"] === currentPath ? "items active" : "items"}
            >
              {item["name"]}
            </Link>
          ))}
        </div>
        <div className="navlist">
          {NavList.map((item, index) => (
            <Link
              key={index}
              href={`${item["path"]}`}
              className={item["path"] === currentPath ? "items active" : "items"}
            >
              {item["name"]}
            </Link>
          ))}
        </div>
      </div>
      {OpenMenu ? <div className="nav_dropdown_bg" onClick={() => setMenu(false)} /> : ''}
    </>
  );
}
