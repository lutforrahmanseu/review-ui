import React, { useState } from "react";

export default function FeedBackForm({handleSubmit,rating,text,setRating,setText}) {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 mb-8 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4 sm:mb-6 font-bold text-lg sm:text-xl">
          How would you rate your service with us?
        </h2>

        {/* Rating buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {numbers.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setRating(num)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${
                rating === num ? "bg-fuchsia-500 text-white" : "bg-gray-200"
              } hover:bg-fuchsia-400 transition-colors text-sm sm:text-base`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Text input */}
        <div className="px-2 sm:px-4">
          <div className="mb-4 flex flex-col">
            <label htmlFor="text" className="font-bold text-sm sm:text-base mb-2">
              Feedback
            </label>
            <input
              type="text"
              placeholder="Write a review"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:border-fuchsia-500"
            />
            {/* Validation Message */}
            <div className="mt-2 text-sm">
              {text.trim().length < 10 && (
                <p className="text-red-500">
                  Feedback must be at least 10 characters ({10 - text.trim().length} more needed)
                </p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={text.trim().length < 10}
            className="w-full sm:w-auto bg-fuchsia-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-fuchsia-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
