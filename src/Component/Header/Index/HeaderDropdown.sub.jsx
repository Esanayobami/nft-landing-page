import HeaderLinks from "./HeaderLinks.sub";
import Headerbutton from "./HeaderButtons.sub";
const HeaderDropDown = ({ showLinks }) => {
    const style = { position : "absolute" , left : 0 , width : "100%" ,  }
    return ( 
        <div className={`md:flex ${showLinks ? "" : "hidden"}  `} style={style} >
            <HeaderLinks showLinks={showLinks} />
            <Headerbutton />
        </div>
     )
}
 
export default HeaderDropDown;