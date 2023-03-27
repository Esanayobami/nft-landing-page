import { HeroData } from "../Hero_Data";

const HeroImg = () => {
    return ( 
    <div>
        <img src={HeroData.heroImg} alt="Hero image" className="w-9/12 mx-auto py-4"  />
    </div>
     )
}
 
export default HeroImg;