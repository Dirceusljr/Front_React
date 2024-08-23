import React from 'react'

const Link = ({color = 'text-darkGray2', colorHover = 'hover:text-darkGray2' , children}) => {
  return (
    <a href="#" className={`text-small ${color} text-nowrap hover:underline hover:underline-offset-4 ${colorHover} `}>
        {children}
    </a>
  )
}

export default Link