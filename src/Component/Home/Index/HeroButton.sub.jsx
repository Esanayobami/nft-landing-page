import Button from "../../../Reusables/Button/Button";
import { BsArrowRight } from "react-icons/bs";
const HeroButton = () => {
    return ( 
        <div className="flex gap-2">
           <Button title="Explore Now" className="bg-black text-white text-lg px-3 py-2 font-medium" />
           <Button title="Create My Nft" icon={BsArrowRight} className="flex items-center gap-2 text-lg px-3 py-1 font-medium hover:underline" />
        </div>
     )
}
 
export default HeroButton ;