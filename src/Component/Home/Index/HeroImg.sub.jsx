import { HeroData } from "../Hero_Data";

const HeroImg = () => {
    return ( 
    <div className="flex flex-col justify-between  md:h-full">
        
        <img src={HeroData.heroImg} alt="Hero image" className="w-9/12 mx-auto lg:w-8/12"  />
    </div>
     )
}
 
export default HeroImg;