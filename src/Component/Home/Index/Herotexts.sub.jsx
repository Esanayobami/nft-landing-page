import { HeroData } from "../Hero_Data";

const HeroTexts = () => {
    const { heroDescription , heroSubDescription } = HeroData;
    const { description , blueText } = heroDescription;
    const { firstWord , lastThreeWords } = blueText;

    return ( 
        <section>
            <div className="py-8">
                <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl lg:font-bold lg:max-w-[600px]">
                    <span className="text-blue">{firstWord}</span>
                    {description}
                    <span className="text-blue">{lastThreeWords}</span>
                </h1>
                <p className="text-xl py-2 font-normal text-grey md:font-semibold md:pt-4 lg:text-2xl lg:pt-10">{heroSubDescription} </p>
            </div>
        </section>
     )
}
 
export default HeroTexts;