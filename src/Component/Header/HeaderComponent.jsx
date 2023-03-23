import HeaderLogo from "./Index/HeaderLogo.sub";
import HeaderMenu from "./Index/HeaderMenu.sub";


const Header = () => {
    return ( 
        <header className="flex justify-between items-center py-2">
             <HeaderLogo />
             <HeaderMenu />
        </header>
     )
}
 
export default Header;