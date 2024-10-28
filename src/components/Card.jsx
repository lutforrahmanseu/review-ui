import React from "react";

export default function Card({ children, reverse }) {
  return (
    <div
      className="rounded-md px-14 py-10 m-14 relative" style={{
        backgroundColor: reverse ? "#2c2b35 " : "white",
        color: reverse ? "white" : "#000",
      }}
    >
      {children}
    </div>
  );
}
