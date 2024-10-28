import React, { useState } from 'react'
import Header from './components/Header'
import { feedbackData } from './data/feedbackdata';
import FeedBackList from './components/FeedBackList';
export default function App() {
  const [feedback,setFeedback] = useState(feedbackData);
  return (
    <div className=''>
      <Header text="Reward Ui" textColor="red" bgColor="green"  />
      
      <div>
      <FeedBackList feedback={feedback}/>
      </div>
     
    </div>
  )
}
