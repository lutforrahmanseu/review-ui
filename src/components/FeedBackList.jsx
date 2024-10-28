import React from 'react'
import FeedBackItem from './FeedBackItem'

export default function FeedBackList({feedback,handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p className='text-center text-lg sm:text-xl md:text-2xl font-bold text-white'>
          No feedback found
        </p>
    }
    
    return (
      <div className='container mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-4 max-w-4xl'>
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
          {feedback.map((item) => (
            <FeedBackItem 
              key={item.id} 
              item={item} 
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    )
}
