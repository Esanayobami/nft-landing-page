import Button from "../../../Reusables/Button/Button";

const Headerbutton = () => {

    const { title, onClick, className, icon: Icon, bgColor } = Button;

    return ( 
        <div className="flex flex-col md:flex-row gap-3">
            <Button title="Log in" className="border border-black text-xl px-3 py-1 font-medium mx-auto" />
            <Button title="Sign up" className="bg-black text-white text-xl px-3 py-1 font-medium mx-auto" />
        </div>
        
     )
}
 
export default Headerbutton;