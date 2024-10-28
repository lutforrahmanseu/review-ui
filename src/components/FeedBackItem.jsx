import React, { useState } from "react";
import Card from "./Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedBackItem({ item, handleDelete }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          y: -10,
          scale: 0.8
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card reverse={true}>
          {/* Rating Circle */}
          <motion.div 
            className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
              rounded-full bg-fuchsia-500 flex items-center justify-center text-white text-sm sm:text-base md:text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.rating}
          </motion.div>

          {/* Edit Button */}
          <motion.button 
            className="absolute top-1 right-8 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
              rounded-full flex items-center justify-center hover:text-fuchsia-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEdit className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Delete Button */}
          <motion.button 
            onClick={() => handleDelete(item.id)} 
            className="absolute top-1 right-1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
              rounded-full flex items-center justify-center hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Feedback Text */}
          <div className="pt-8 sm:pt-10 text-sm sm:text-base">
            {item.text}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
