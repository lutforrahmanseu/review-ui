import React, { useState } from "react";
import Card from "./Card";

export default function FeedBackItem({ item }) {
  return (
    <Card reverse={false}>
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center">
        {item.rating}
      </div>
      <div className="">{item.text}</div>
    </Card>
  );
}
