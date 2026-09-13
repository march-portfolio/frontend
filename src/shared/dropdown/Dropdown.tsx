"use client";
import React, { ReactNode, useState } from "react";
import "./dropdown.scss";

type DropdownProps = {
  children: ReactNode;
  label: string;
  defaultOpen?: boolean;
};

export function Dropdown({ children, label, defaultOpen = false }: DropdownProps) {
  const [isOpen, setOpen] = useState(defaultOpen);

  return (
    <div className={`Dropdown ${isOpen ? "open" : ""}`}>
      <div
        className="DropdownHead"
        onClick={() => setOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(!isOpen);
          }
        }}
      >
        <div className="DropdownTitle">{label}</div>
        <div className="DropdownIconWrapper" aria-hidden="true">
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
      {isOpen && <div className="DropdownDetails">{children}</div>}
    </div>
  );
}

export default Dropdown;
