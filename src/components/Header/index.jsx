import Logo from '../Logo'
import SearchBar from '../SearchBar'
import Link from '../Link'
import Button from '../Button'
import cartIcon from '../../assets/Buy.png'
import logoImg from '../../assets/logo-primary.png'

const Header = () => {
  return (
      <header className='w-full max-h-[192px] bg-white shadow-header px-[104px] pt-[42px] pb-[20px] flex items-center justify-between'>
          <Logo imgLogo={logoImg} />
          <SearchBar />
          <div className='flex ml-12 gap-[30px] items-center'>
            <Link>Cadastre-se</Link>
            <Button>Entrar</Button>
          </div>
          <div className='w-fit min-w-[24px] h-auto ml-[70px]'>
            <img src={cartIcon} className='w-[25px] h-auto' />
            <span className='sr-only'>Ícone de carrinho de compras</span>
          </div>
      </header>
  )
}

export default Header