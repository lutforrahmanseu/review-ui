import React from 'react'

export default function Header({text,textColor,bgColor}) {
    const headStyle = { 
        color: textColor,
        backgroundColor: bgColor,
    };
  return (
    <div className='text-center text-2xl font-bold' style={headStyle}>{text}</div>
  )
}
