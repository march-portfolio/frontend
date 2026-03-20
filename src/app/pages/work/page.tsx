"use client";
import { useState } from "react";
import "./work.scss";
import { CardWork } from "@/shared/card-work/page";
import img from "../../../assets/march_project_logo.png";

export default function WorkPage() {
  const [field, setField] = useState("All");
  //API call data
  const work = [
    {
      label: "March Project",
      img: img,
      type: "Code",
      description: "for compony",
    },
    {
      label: "March Project 2",
      img: img,
      type: "Media",
      description: "practice",
    },
  ];

  return (
    <>
      <div className="optionbar">
        <JobField_Btn field={field} setField={setField} label="All" />
        <JobField_Btn field={field} setField={setField} label="Code" />
        <JobField_Btn field={field} setField={setField} label="Media" />
        <JobField_Btn field={field} setField={setField} label="Model" />
        <JobField_Btn field={field} setField={setField} label="Design" />
      </div>

      <div className="workfield">
        {work.map((work, index) => {
          if (field == "All" || field == work.type) {
            return (
              <CardWork
                key={index}
                label={work.label}
                img={work.img}
                description={work.description}
              />
            );
          }
        })}
      </div>
    </>
  );
}

function JobField_Btn({ field, setField, label }: any) {
  return (
    <button
      className={field === label ? "active" : ""}
      onClick={() => setField(label)}
    >
      {label}
    </button>
  );
}
