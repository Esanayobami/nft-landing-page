import { Swiper  , SwiperSlide } from "swiper/react"

import AuctionSwiper from "./AuctionSwiper.sub";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AuctionSwiperContainer = () => {
    return ( 
        <div>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             slidesPerView={3}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <AuctionSwiper />
                </SwiperSlide>
            </Swiper>
        </div>
     )
}
 
export default AuctionSwiperContainer;