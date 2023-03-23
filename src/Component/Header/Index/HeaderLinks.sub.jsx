import { HeaderData } from "../Header_Data";
import Headerbutton from "./HeaderButtons.sub";
const HeaderLinks = ({showLinks}) => {
  return (

    <ul className={`md:flex ${showLinks ? "" : "hidden"}  `}>
      <li className="flex flex-col md:flex-row   items-center md:mr-10" >
        {HeaderData.map((item) => (
          <a href="#" key={item.id} className="text-xl font-medium  py-2 md:px-2">
            {item.linkname}
          </a>
        ))}
      </li>
      <div className="hidden md:block">
      <Headerbutton/>
      </div >
    </ul>
  
  );
};

export default HeaderLinks;
