import React from 'react'

export default function FeedBackStarts({feedback}) {
    let average = feedback.reduce((acc,cur) => acc + cur.rating,0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='container mx-auto py-4 sm:py-6 md:py-10 
      flex flex-col sm:flex-row justify-between items-center 
      px-4 sm:px-8 md:px-14 gap-2 
      max-w-4xl'>
        <h1 className='text-center text-lg sm:text-xl md:text-2xl font-bold'>
          {feedback.length} Reviews
        </h1>
        <p className='text-center text-base sm:text-lg md:text-xl font-bold'>
          Average Rating: {isNaN(average) ? 0 : average}
        </p>
    </div>
  )
}
