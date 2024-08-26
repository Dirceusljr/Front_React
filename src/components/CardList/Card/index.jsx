import React from 'react'


const Card = ({ id, title, price, discount, category, image }) => {
  return (
    <div className='flex flex-col p-3 rounded-sm' key={id}>
        <div className='w-full rounded-3xl'>
            <img src={image} className='size-36 rounded-md' />
            <span className='sr-only'>{title}</span>
        </div>
        <div>
            <p className='text-xxsmall-bold'>{category}</p>
            <h3 className='text-large'>{title}</h3>
            <p className='text-large-bold'>{price}</p>
        </div>
    </div>
  )
}

export default Card