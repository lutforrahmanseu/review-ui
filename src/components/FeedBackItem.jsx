import React from "react";
import Card from "./Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeedBackItem({ item, handleDelete, handleEdit }) {
  return (
    <Card reverse={true}>
      <motion.div 
        className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {item.rating}
      </motion.div>
      
      <motion.button 
        onClick={() => handleEdit(item)}
        className="absolute top-1 right-10 w-12 h-12 rounded-full flex items-center justify-center hover:text-fuchsia-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaEdit />
      </motion.button>
      
      <motion.button 
        onClick={() => handleDelete(item.id)} 
        className="absolute top-1 right-1 w-12 h-12 rounded-full flex items-center justify-center hover:text-red-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaTimes />
      </motion.button>
      
      <div className="pt-8">{item.text}</div>
    </Card>
  );
}
