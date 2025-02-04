import './cardwork.scss';

import Image from 'next/image';

export function CardWork(props:any){
  return(
    <>
    <div className="card_container">
      <label>{props.label}</label>

      <Image loading='lazy' src={props.img} alt="March Project Logo"></Image>
      <p>{props.description}</p>
      <div className='btn'>
      <button>Interest</button>
         <button>View</button>
      </div>
     
    </div>
    
    </>
  )
}