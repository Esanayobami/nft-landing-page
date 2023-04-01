import { Swiper  , SwiperSlide } from "swiper/react"

import AuctionSwiper from "./AuctionSwiper.sub";


const AuctionSwiperContainer = () => {
    return ( 
        <div className="overflow-x-scroll  " >     
             <AuctionSwiper />
        </div>
     )
}
 
export default AuctionSwiperContainer;