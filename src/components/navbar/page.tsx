import Link from 'next/link';
import './navbar.scss';

export function NavBar(){
  return(
    <>
    <div className="navbar">
      <Link href='/' className="items">หน้าหลัก</Link >
      <Link href='/pages/work' className="items">ผลงาน</Link >
      <Link href='/pages/contact' className="items">ติดต่อ</Link >
      <Link href='/pages/about' className="items">เกี่ยวกับ</Link >
    </div>
    </>
  )
}