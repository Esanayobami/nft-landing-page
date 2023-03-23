import HeaderLogo from "./Index/HeaderLogo.sub";
import HeaderMenu from "./Index/HeaderMenu.sub";
import HeaderLinks from "./Index/HeaderLinks.sub";
const Header = () => {
    return ( 

        <header className="">
            <div className="flex justify-between items-center py-2 md:py-4">
            <HeaderLogo />
            <HeaderLinks />   
            <HeaderMenu />
            </div>
        </header>
     )
}
 
export default Header;