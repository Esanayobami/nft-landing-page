import Header from "./Component/Header/HeaderComponent";
import Hero from "./Component/Home/HeroComponent";
import Auction from "./Component/Auction/AuctionComponent";
function App() {

  return (
    <div className="px-3 md:px-8 xl:px-16">
        <Header />
        <Hero />
        <Auction />
    </div>
  )
}

export default App
