import React, { useState } from 'react'
import Header from './components/Header'
import { feedbackData } from './data/feedbackdata';
import FeedBackList from './components/FeedBackList';
import FeedBackStarts from './components/FeedBackStarts';
import FeedBackForm from './components/FeedBackForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  
  const handleDelete = (id) => {
    const newFeedback = feedback.filter((item) => item.id !== id);
    
    toast.warning(
      <div>
        <p>Are you sure you want to delete this feedback?</p>
        <div className="mt-2 flex justify-end items-center gap-2">
          <button
            onClick={() => {
              toast.dismiss(); // Dismiss the warning toast first
              setFeedback(newFeedback);
              toast.success('Feedback deleted successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
              });
            }}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-500 text-white rounded-md text-sm hover:bg-gray-600 transition-colors"
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

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
        <FeedBackForm 
          handleSubmit={handleSubmit} 
          rating={rating} 
          text={text} 
          setRating={setRating} 
          setText={setText} 
        />
        <FeedBackStarts feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={handleDelete} />
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
