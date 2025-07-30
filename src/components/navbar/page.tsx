"use client";

import Link from "next/link";
import "./navbar.scss";
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
      {/* 
      
      use this set of code is already fine but using array object and map is just to show off my skill. from me

      <div className="navbar">
      <Link href='/' className="items">หน้าหลัก</Link >
      <Link href='/pages/work' className="items">ผลงาน</Link >
      <Link href='/pages/contact' className="items">ติดต่อ</Link >
      <Link href='/pages/about' className="items">เกี่ยวกับ</Link >
    </div> 
    */}

      <div className="navbar">
        <div className="mainpage">
          <Link className="marchtanu" href="/"> MarchTanu </Link>
        </div>
        <div className="menu" onClick={() => setMenu(!OpenMenu)}>
         <div className="marchtanu" onClick={() => setMenu(!OpenMenu)}>MarchTanu</div>
          <i className="bi bi-caret-down-fill"></i>
        </div>
        <div className={"nav_dropdown_" + OpenMenu}>

            {NavList.map((item, index) => (
            <Link
              key={index}
              href={`${item["path"]}`}
              className={
                item["path"] === currentPath ? "items active" : "items"
              }
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
              className={
                item["path"] === currentPath ? "items active" : "items"
              }
            >
              {item["name"]}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
