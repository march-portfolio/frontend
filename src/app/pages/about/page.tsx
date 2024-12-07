"use client"
import { Dropdown } from "@/shared/dropdown/page";
import './about.scss';

export default function AboutPage(){
  return(
    <>
    <h1>This is about</h1>
    <Dropdown label="Education">
      <div>
        <ul>
          <li>Naresuan University Secondary Demonstration School (Middle School) 2019-2022<br/><p>EIS(English integrated study) Program  GPAX: 3.10</p></li>
          <li>Naresuan University Secondary Demonstration School (High School) 2022-2025 <br/><p>Science-Mathematic Program GPAX: 3.38</p> </li>
        </ul>
      </div>
    </Dropdown>

    <Dropdown label="Certificate">
      <div>
        <ul>
          <li>IELTS 6.5 <br/><p>Speaking: 7 Reading: 7 Listening: 6.5 Writing: 5.0</p></li>
          <li>Web development of Audiovisual Department 2024 <br/><p>Naresuan University Secondary Demonstration School</p> </li>
        </ul>
      </div>
    </Dropdown>

    <Dropdown label="Personal">
      <div>
        <ul>
          <li>Hobbies <br/> <p> Workout, Read a book, Listen to podcast, Cook. </p></li>
          <li>Body <br/> <p> 175 cm, 65 kg. </p></li>
        </ul>
      </div>
    </Dropdown>
    </>
  )
}