import Link from 'next/link';
import './navbar.scss';

export function NavBar(){
  return(
    <>
    <div className="navbar">
      <Link href='/' className="items">หน้าหลัก</Link >
      <Link href='/work' className="items">ผลงาน</Link >
      <Link href='/contact' className="items">ติดต่อ</Link >
      <Link href='/about' className="items">เกี่ยวกับ</Link >
    </div>
    </>
  )
}