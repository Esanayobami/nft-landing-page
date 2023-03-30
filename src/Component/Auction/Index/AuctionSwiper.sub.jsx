import { AuctionSwiperCards } from "../Auction_Data";
import Countdown from "../../Index/Countdown.index";
const AuctionSwiper  = () => {

    return ( 
            <div className="flex gap-10 mb-5">
                {
                    AuctionSwiperCards.map((data ,index)=>(
                        <div key={data.id } className="border-2 border-black px-6 ">
                            <span className="flex justify-between pt-10">
                                <h1 className="font-medium text-xl" >{data.author}</h1>
                                <p className="font-medium">{data.plattform}</p>
                            </span>
                            <div
                                 className={`${index === 0 ? 'bg-[#F3962F] mb-11' : index === 1 ? ' bg-[#2AFF00] mb-11' : index === 2 ? 'bg-[#F9EB60] mb-11' : ' '}`}
                             >
                            <img src={data.img} alt=""   />
                            </div>
                            <span className="flex justify-between ">
                                <Countdown />
                                <p className="text-xl font-medium">{data.price}</p>
                            </span>
                            <span className="flex justify-between text-lg text-grey py-2">
                                <p className="">{data.time}</p>
                                <p>{data.bid}</p>
                            </span>
                        </div>
                    ))
                }
            </div>
     )
}
 
export default AuctionSwiper ;