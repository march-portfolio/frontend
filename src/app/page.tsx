import Image from 'next/image';
import img from '../assets/march_project_logo.png'
import page from './page.module.scss';

export default function Home() {
  return (
    <>
   <Image className={page.Profile} src={img} alt='My Profile'></Image>
   <h1>Tanupat Sojindamanee<br/>
   <span>Web developer</span><br/>
   <span>I'm a web developer based in Thailand</span>
   
   </h1>

   
    </>
  );
}


