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
          <li>Naresuan University Secondary Demonstration School (Middle School) / English integrated study Program <br/><p> 2019-2022  GPAX: 3.10</p></li>
          <li>Naresuan University Secondary Demonstration School (High School) / Science-Mathematic Program  <br/><p> 2022-2025 GPAX: 3.38</p> </li>
          <li>Mahidol University / Bachelor of Science in Digital Science and Technology<br/><p>2025-present</p> </li>
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

    <Dropdown label="About me">
      <div>
        <span> nam</span>
        <span>
          <p>
            Name: Tanupat Sojindamanee
          </p>
          <p>
            Nickname: March
          </p>
          <p>
            Date of Birth: 27 March 2004
          </p>
    
        </span>
      </div>
    </Dropdown>
    </>
  )
}