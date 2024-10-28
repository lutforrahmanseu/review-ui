import React from 'react'

export default function Header({text,textColor,bgColor}) {
    const headStyle = { 
        color: textColor,
        backgroundColor: bgColor,
    };
  return (
    <header 
      className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl 
        font-bold py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8
        sticky top-0 z-50 shadow-md' 
      style={headStyle}
    >
      <div className='container mx-auto max-w-6xl'>
        {text}
      </div>
    </header>
  )
}
