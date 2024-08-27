import React from 'react'
import Tag from '../../Tag'
import Button from '../../Button'

const CollectionCard = ({ discount, title, img}) => {
  return (
    <div className='relative w-full h-[250px] bg-[#D8E3F2] rounded-lg overflow-hidden'>
        <div className='max-w-[60%] h-full pl-[30px] pb-[35px] flex flex-col justify-end items-start'>
            <Tag>{discount}</Tag>
            <h2 className='title-small-bold mb-5'>{title}</h2>
            <Button color='btn-secondary'>Comprar</Button>
        </div>
        <div
        className='absolute right-[-215px] bottom-[-115px] rotate-[-20deg]'
        style={{ backgroundImage: `url(${img})`, width: '350px', height: '250px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      >
            <span className='sr-only'>{title}</span>
        </div>
    </div>
  )
}

export default CollectionCard