import { HeroData } from "./Hero_Data";

const Hero = () => {
    const { heroDescription , heroSubDescription } = HeroData;
    const { description , blueText } = heroDescription;
    const { firstWord , lastThreeWords } = blueText;

    return ( 
        <section>
            <div>
                <h1>
                    <span>{firstWord}</span>
                    {description}
                    <span>{lastThreeWords}</span>
                </h1>
                <p>{heroSubDescription} </p>
            </div>
        </section>
     )
}
 
export default Hero;