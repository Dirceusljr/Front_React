import Carousel from "./components/Carousel"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import CarList from "./components/CardList"
import HighlightCollection from "./components/HighlightCollection"
import SpecialOffer from "./components/SpecialOffer"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-lightGray h-screen ">
      <Header />
      <NavBar />
      <Carousel />
      <HighlightCollection />
      <CarList />
      <SpecialOffer />
      <Footer />
    </div>
  )
}

export default App
