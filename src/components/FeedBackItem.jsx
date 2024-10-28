import React, { useState } from "react";
import Card from "./Card";
import { FaTimes } from "react-icons/fa";

export default function FeedBackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center">
        {item.rating}
      </div>
      <button className="absolute top-1 right-10 w-12 h-12 rounded-full flex items-center justify-center">Edit</button>
      <button 
        onClick={() => handleDelete(item.id)} 
        className="absolute top-1 right-1 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <FaTimes />
      </button>
      <div className="">{item.text}</div>
    </Card>
  );
}
