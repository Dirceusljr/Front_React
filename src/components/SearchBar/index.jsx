import searchIcon from '../../assets/Search.svg'

const SearchBar = () => {
  return (
    <div className='flex items-center relative w-full max-w-[559px] min-w-[240px] ml-[27px]'>
        <input 
            type="text" 
            name="searchBar" 
            id="searchBar"
            placeholder='Pesquisar produto...'
            className='h-[60px] w-full rounded-lg text-small bg-darkGray2 bg-opacity-[0.04] placeholder:text-darkGray3 placeholder:text-small placeholder:opacity-60 pl-6 py-4 outline-none'
        />
        <div className='absolute right-4'>
            <img src={searchIcon} className='w-[18px] h-[18px]'/>
            <span className='sr-only'>Lupa na barra de pesquisa</span>
        </div>
    </div>
  )
}

export default SearchBar