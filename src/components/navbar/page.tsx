"use client";

import Link from "next/link";
import "./navbar.scss";
import { usePathname } from "next/navigation";

export function NavBar() {
  const currentPath = usePathname();
  const NavList = [
    {
      name: "Main",
      path: "/",
    },
    {
      name: "Work",
      path: "/pages/work",
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
      
      use this set of code is already fine but using array object and map it out is just to show off my skill.

      <div className="navbar">
      <Link href='/' className="items">หน้าหลัก</Link >
      <Link href='/pages/work' className="items">ผลงาน</Link >
      <Link href='/pages/contact' className="items">ติดต่อ</Link >
      <Link href='/pages/about' className="items">เกี่ยวกับ</Link >
    </div> 
    */}

      <div className="navbar">
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
    </>
  );
}
