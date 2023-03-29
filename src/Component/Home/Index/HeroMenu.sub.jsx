import { PriceData } from "../Hero_Data";

const HeroMenu = () => {
    return ( 
        <div className="flex justify-between items-center py-6 px-4 md:pt-6 lg:px-0">
            {
              PriceData.map((item) => (
                    <div  key={item.id} className=" even:border-x-2 even:px-3 even:border-black" >
                       <h1 className="text-center text-blue text-2xl font-medium lg:text-3xl">{item.amount}</h1>
                       <p className="text-center lg:text-xl">{item.about} </p>
                    </div>
              ))  
            }
        </div>
     )
}
 
export default HeroMenu;