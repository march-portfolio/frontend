"use client";
import CodeWork from "@/components/code-work/page";
import MCWork from "@/components/mc-work/page";
import "./work.scss";
import ModelWork from "@/components/model-work/page";

export default function WorkPage() {
  return (
    <>
      <div className="workpage-background"></div>
      <div className="workpage-layout">
        <div className="work-display">
          <CodeWork/>
        </div>
        <div className="work-display">
          <MCWork/>
        </div>
        <div className="work-display">
          <ModelWork/>
        </div>
        <div className="work-display">

        </div>
      </div>
    </>
  );
}
