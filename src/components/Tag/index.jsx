import React from 'react'

const Tag = ({children}) => {
  return (
    <div className="absolute top-5 left-5 bg-[#E7FF86] text-xsmall-bold px-[15px] py-[5px] rounded-[29px]">
    {children}% OFF
  </div>
  )
}

export default Tag