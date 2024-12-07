"use client";
import React, { ReactNode, useState } from "react";
import "./dropdown.scss";

type DropdownProps = {
  children: ReactNode;
  label: string;
};

export function Dropdown({ children, label }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="Dropdown">
        <div className="DropdownHead" onClick={() => setOpen(!isOpen)}>
          <div>{label}</div>
          {isOpen ? (
            <i className="bi bi-chevron-down"></i>
          ) : (
            <i className="bi bi-chevron-right"></i>
          )}
        </div>
        {isOpen ? <div className="DropdownDetails">{children}</div> : ""}
      </div>
    </>
  );
}
