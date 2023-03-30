import { useEffect , useState } from "react";

const Countdown = () => {
    const [countDown , setCountDown ] = useState({hours : 10 , minutes : 1, seconds : 3})
    
    useEffect(()=>{
        const interval = setInterval(() => {
            setCountDown((prevCountdown) => {
              if (prevCountdown.hours === 0 && prevCountdown.minutes === 0 && prevCountdown.seconds === 0) {
                clearInterval(interval);
              } else {
                let newSeconds = prevCountdown.seconds - 1;
                let newMinutes = prevCountdown.minutes;
                let newHours = prevCountdown.hours;
      
                if (newSeconds < 0) {
                  newSeconds = 59;
                  newMinutes -= 1;
                }
      
                if (newMinutes < 0) {
                  newMinutes = 59;
                  newHours -= 1;
                }
      
                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
              }
            });
          }, 1000);
      
          return () => clearInterval(interval);
    } , [])

    return ( 
        <div>
             <p className="text-xl font-medium"> {countDown.hours}h { countDown.minutes}m {countDown.seconds}s</p>
        </div>
     )
}
 
export default Countdown;