"use client";
import { useState } from "react";
import "./work.scss";
import { CardWork } from "@/shared/card-work/page";
import img from '../../../assets/march_project_logo.png';

export default function WorkPage() {
  const [field, setField] = useState("");

  return (
    <>
      <h1>This is work</h1>

      <div className="optionbar">
        <button
          className={field === "" ? "active" : ""}
          onClick={() => setField("")}
        >
          All
        </button>
        <button
          className={field === "code" ? "active" : ""}
          onClick={() => setField("code")}
        >
          Code
        </button>
        <button
          className={field === "media" ? "active" : ""}
          onClick={() => setField("media")}
        >
          Media
        </button>
        <button
          className={field === "model" ? "active" : ""}
          onClick={() => setField("model")}
        >
          Model
        </button>
      </div>

      <div className="workfield">
        <CardWork label='March Project' img={img} description='for compony'/>
        <CardWork label='March Project' img={img} description='for compony'/>
        <CardWork label='March Project' img={img} description='for compony'/>
        <CardWork label='March Project' img={img} description='for compony'/>
        <CardWork label='March Project' img={img} description='for compony'/>
      </div>
    </>
  );
}
