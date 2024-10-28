import React, { useState } from 'react'
import Header from './components/Header'
import { feedbackData } from './data/feedbackdata';
import FeedBackList from './components/FeedBackList';
import FeedBackStarts from './components/FeedBackStarts';
import FeedBackForm from './components/FeedBackForm';
export default function App() {
  const [feedback,setFeedback] = useState(feedbackData);
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  
  const handleDelete = (id) => {
    const newFeedback = feedback.filter((item) => item.id !== id);
    if(window.confirm('Are you sure you want to delete this feedback?')){
      setFeedback(newFeedback);
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        id: Math.random().toString(),
        text,
        rating,
      };
      setFeedback([newFeedback,...feedback]);
      setText("");
    }
  };
 

  
  return (
    <div className=''>
      <Header text="Reward Ui" textColor="white" bgColor="#40303c"  />
      
      <div>
        <FeedBackForm handleSubmit={handleSubmit} rating={rating} text={text} setRating={setRating} setText={setText} />
        <FeedBackStarts feedback={feedback} />
      <FeedBackList feedback={feedback} handleDelete={handleDelete} />
      </div>
     
    </div>
  )
}
