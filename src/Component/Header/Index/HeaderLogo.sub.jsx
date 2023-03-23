import { HeaderAssetsData } from "../Header_Data";

const HeaderLogo = () => {
    const { logo } = HeaderAssetsData;
    return ( 
        <div>
            <img 
                src={logo} 
                alt=""
                className="w-7" 
            />
        </div>
     )
}
 
export default HeaderLogo;