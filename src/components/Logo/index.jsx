const Logo = ({imgLogo, textColor = 'text-primary'} ) => {
  return (
    <div className='flex gap-2 items-center w-fit'>
        <div className='max-w-[33px] min-w-[25px] h-auto'>
            <img src={imgLogo} className='w-fit' />
            <span className='sr-only'>Logo da Digital Store</span>
        </div>
        <h3 className={`title-small-bold ${textColor} text-[19px] md:text-[24px] lg:text-[28px] xl:text-[37px] font-semibold text-nowrap`}>Digital Store</h3>
    </div>
  )
}

export default Logo