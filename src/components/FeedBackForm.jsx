import React, { useState } from "react";

export default function FeedBackForm({handleSubmit,rating,text,setRating,setText}) {
  

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-6">
          How would you rate your service with us?
        </h2>

        {/* Rating buttons */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setRating(num)}
              className={`w-12 h-12 rounded-full ${
                rating === num ? "bg-fuchsia-500 text-white" : "bg-gray-200"
              } hover:bg-fuchsia-400 transition-colors`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Text input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:border-fuchsia-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={text.trim().length < 10}
          className="bg-fuchsia-500 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}
