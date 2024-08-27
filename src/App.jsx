import Carousel from "./components/Carousel"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import CarList from "./components/CardList"
import HighlightCollection from "./components/HighlightCollection"

function App() {

  return (
    <div className="bg-lightGray h-screen ">
      <Header />
      <NavBar />
      <Carousel />
      <HighlightCollection />
      <CarList />
    </div>
  )
}

export default App
