import { Swiper  , SwiperSlide } from "swiper/react"

import AuctionSwiper from "./AuctionSwiper.sub";


const AuctionSwiperContainer = () => {
    return ( 
        <div>
            <Swiper
            >
                <SwiperSlide>
                    <AuctionSwiper />
                </SwiperSlide>
            </Swiper>
        </div>
     )
}
 
export default AuctionSwiperContainer;