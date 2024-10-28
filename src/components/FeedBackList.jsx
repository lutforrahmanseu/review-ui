import React from 'react'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -50, 
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

export default function FeedBackList({feedback, handleDelete, handleEdit}) {
    if(!feedback || feedback.length === 0){
        return (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='text-center text-lg sm:text-xl md:text-2xl font-bold text-white'
          >
            No feedback found
          </motion.p>
        )
    }
    
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='container mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-4 max-w-4xl'
      >
        <AnimatePresence mode="popLayout">
          <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
            {feedback.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="relative"
              >
                <FeedBackItem 
                  item={item} 
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    )
}
