import { HeroData } from "./Hero_Data";

const Hero = () => {
    const { heroDescription , heroSubDescription } = HeroData;


    return ( 
        <section>

           <div>
                <h1 >
                    {heroDescription}
                </h1>
                <p>{heroSubDescription}</p>
           </div>

           <div>

           </div>
        </section>
     )
}
 
export default Hero;