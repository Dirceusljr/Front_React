import Button from '../../Button'
import sneaker from '/White-Sneakers.png'
import ornament from '/Ornament.svg'

const Slide = () => {
  return (
    <div className='bg-lightGray3 pl-24 flex justify-between h-full'>
        <div className='flex flex-col w-[35%] pt-[124px]'>
            <p className='text-small-bold text-warning'>Melhores ofertas personalizadas</p>
            <h1 className='title-large-bold my-5'>Queima de estoque Nike 🔥</h1>
            <p className='text-medium mb-10'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <Button>Ver ofertas</Button>
        </div>
        <div className='relative w-full max-w-[60%]'>
            <img src={sneaker} className='rotate-[-20deg] align-middle'/>
            <span className='sr-only'>Imagem de um tênis branco</span>
            <img src={ornament} className='absolute top-10 right-4 max-w-[140px] h-auto'  />
            <span className='sr-only'>Ornamento</span>
        </div>
    </div>
  )
}

export default Slide