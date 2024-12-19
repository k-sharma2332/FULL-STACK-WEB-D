import { useState } from "react";
export default function Counter(){
    
   let [count, setCount] = useState(0);      //initialization

   let incount = () => {
    setCount(count+1);
    console.log(count);
   };
    return (
        <div>
            <h3>Count ={count} </h3>
            <button  onClick={incount}> increse count</button>
        </div>
    )                                                     
}

// state in react - the state is a built-in react object that is used to contain data or information about the component .A components state can change over time;whenever it change, the component re-renders.
// Hooks - Hooks were a new addition in React16.8.  They let use state and other react feature without writing a class.
// useState() - is  react hook that you add a state variable to your component.