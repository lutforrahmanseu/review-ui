import React from "react";

export default function Card({ children, reverse }) {
  return (
    <div
      className="rounded-md 
        px-6 sm:px-10 md:px-14 
        py-6 sm:py-8 md:py-10 
        m-4 sm:m-8 md:m-14 
        relative 
        shadow-lg"
      style={{
        backgroundColor: reverse ? "#2c2b35" : "white",
        color: reverse ? "white" : "#000",
      }}
    >
      {children}
    </div>
  );
}
