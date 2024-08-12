import React from 'react'
import Link from '../Link'

const NavBar = () => {
  return (
    <nav className='box-border pt-5 bg-white pl-[100px] pb-8'>
        <ul className='flex w-[35%]'>
            <Link colorHover='hover:text-primary hover:font-bold hover:underline inline-block w-[25%]'>
                <span className='inline-block w-full hover:underline hover:underline-offset-4'>Home</span>
            </Link>
            <Link colorHover='hover:text-primary hover:font-bold inline-block w-[25%]'>
                <span className='inline-block w-full hover:underline hover:underline-offset-4'>Produtos</span>
            </Link>
            <Link colorHover='hover:text-primary hover:font-bold inline-block w-[25%]'>
                <span className='inline-block w-full hover:underline hover:underline-offset-4'>Categorias</span>
            </Link>
            <Link colorHover='hover:text-primary hover:font-bold inline-block w-[25%]'>
                <span className='inline-block w-full hover:underline hover:underline-offset-4'>Meus Pedidos</span>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar