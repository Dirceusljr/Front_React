import { useEffect, useState } from "react"
import Card from "./components/CardList/Card"
import Carousel from "./components/Carousel"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import { getProducts } from "./services/products"

function App() {

  const [product, setProduct] = useState({})

  const getAllProducts = async () => {
    const response = await getProducts()
    setProduct(response)
  }

  useEffect(()=> {
    getAllProducts()
  }, [])

  return (
    <div className="bg-lightGray h-screen ">
      <Header />
      <NavBar />
      <Carousel />
      <Card {...product} />
    </div>
  )
}

export default App
