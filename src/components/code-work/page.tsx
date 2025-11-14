import Img from '@/assets/march_project_logo.png';
import Image from 'next/image';

export default function CodeWork() {
  return (
    <>
    <Image src={Img} alt="Code Work Image" />
    <h1>Code Work Component</h1>
    <button>Click Me</button>
    </>
  )
}