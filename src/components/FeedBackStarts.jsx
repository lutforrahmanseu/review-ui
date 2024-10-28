import React from 'react'
import { motion } from 'framer-motion'

export default function FeedBackStarts({feedback}) {
    let average = feedback.reduce((acc,cur) => acc + cur.rating,0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='container mx-auto 
                py-3 sm:py-4 md:py-6 lg:py-8
                flex flex-col sm:flex-row 
                justify-between items-center 
                 
                gap-2 sm:gap-4 
                max-w-3xl'
        >
            <motion.h1 
                whileHover={{ scale: 1.05 }}
                className='text-center 
                    text-base sm:text-lg md:text-xl lg:text-2xl 
                    font-bold 
                    bg-white/10 
                    px-4 py-2 
                    rounded-lg 
                    backdrop-blur-sm'
            >
                {feedback.length} {feedback.length === 1 ? 'Review' : 'Reviews'}
            </motion.h1>

            <motion.p 
                whileHover={{ scale: 1.05 }}
                className='text-center 
                    text-sm sm:text-base md:text-lg lg:text-xl 
                    font-bold 
                    bg-white/10 
                    px-4 py-2 
                    rounded-lg 
                    backdrop-blur-sm'
            >
                Average Rating: 
                <motion.span 
                    key={average}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='ml-2 text-fuchsia-400'
                >
                    {isNaN(average) ? 0 : average}
                </motion.span>
            </motion.p>
        </motion.div>
    );
}
