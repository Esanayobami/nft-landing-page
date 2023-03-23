import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderDropDown from "./HeaderDropdown.sub";

const HeaderMenu = () => {
  const [showLinks, setShowLinks] = useState(true);
  const style = { fontSize: "25px" };

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="md:hidden">
      <AiOutlineMenu style={style} className="relative" onClick={handleToggle} />
      <HeaderDropDown showLinks={!showLinks} />
    </div>
  );
};

export default HeaderMenu;
