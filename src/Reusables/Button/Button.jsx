const Button = ({ title, onClick, className, icon: Icon, bgColor }) => {
    const styles = {
      black: {
        backgroundColor: "black",
        color: "white"
      },
      white: {
        backgroundColor: "white",
        color: "black",
        borderColor : "black",
      }
    };
  
    return (
      <button className={className} onClick={onClick} style={styles[bgColor]}>
        {title}
        {Icon && <Icon />}
      </button>
    );
  };
  
  export default Button;
  