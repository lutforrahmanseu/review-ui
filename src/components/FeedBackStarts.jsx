import React from 'react'

export default function FeedBackStarts({feedback}) {
    let average = feedback.reduce((acc,cur) => acc + cur.rating,0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='container mx-auto py-10 flex justify-between items-center px-14 gap-2'>
        <h1 className='text-center text-2xl font-bold'>{feedback.length} Reviews</h1>
        <p className='text-center text-xl font-bold'>Average Rating {isNaN(average) ? 0 : average}</p>

    </div>
  )
}
