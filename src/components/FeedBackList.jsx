import React from 'react'
import FeedBackItem from './FeedBackItem'

export default function FeedBackList({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback found</p>
    }
  return (
    <div className='container mx-auto p-2'>
        {feedback.map((item) => (
           <FeedBackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}
