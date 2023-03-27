import HeroTexts from "./Index/Herotexts.sub";
import HeroButton from "./Index/HeroButton.sub";
import HeroMenu from "./Index/HeroMenu.sub";
import HeroImg from "./Index/HeroImg.sub";
const Hero = () => {
    return ( 
        <section >
            <div className="flex flex-col md:flex-row ">
                <div className="md:basis-2/4">
                    <HeroTexts />
                    <HeroButton />
                    <HeroMenu />
                </div>
                <div className="md:basis-2/4">
                    <HeroImg />
                </div>
            </div>
        </section>
     )
}
 
export default Hero;