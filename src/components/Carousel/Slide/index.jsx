import Button from '../../Button'
import sneaker from '/White-Sneakers.png'
import ornament from '/Ornament.svg'

const Slide = () => {
  return (
    <div className='bg-lightGray3 pl-24 flex'>
        <div className='flex flex-col max-w-[35%] pt-[124px]'>
            <p className='text-small-bold text-warning'>Melhores ofertas personalizadas</p>
            <h1 className='title-large-bold my-5'>Queima de estoque Nike 🔥</h1>
            <p className='text-medium mb-10'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <Button>Ver ofertas</Button>
        </div>
        <div className='relative w-fit'>
            <img src={sneaker} className='w-full max-w-[8   50px]'/>
            <span className='sr-only'>Imagem de um tênis branco</span>
            <img src={ornament} className='absolute lg:top-10 lg:right-4 top-5 right-2 w-[10%] sm:w-[15%] md:w-[20%] xl:w-[40%] max-w-[140px] h-auto'  />
            <span className='sr-only'>Ornamento</span>
        </div>
    </div>
  )
}

export default Slide