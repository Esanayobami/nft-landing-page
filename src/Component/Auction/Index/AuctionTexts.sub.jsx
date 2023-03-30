import { AuctionData } from "../Auction_Data";

const AuctionTexts = () => {
    const { about ,type , description } = AuctionData;
    return ( 
        <div className="py-10">
            <p className=" text-grey text-xl font-medium">{about  }</p>
            <h1 className=" text-black text-3xl font-medium">{type} </h1>
            <p className=" text-grey text-xl font-medium">{description} </p>
        </div>
     )
}
 
export default AuctionTexts ;