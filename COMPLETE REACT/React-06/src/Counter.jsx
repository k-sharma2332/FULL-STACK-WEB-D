import { useState , useEffect} from "react"



export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);

   
    let incountx = () =>{
        setCountx((currCount) => currCount+1);
    };

    let incounty = () =>{
        setCounty((currCount) => currCount+1);
    };

useEffect(function printSomething() {
    console.log("this is a side-effect");
},[countx]);

    return(
        <div>
            <h3>Countx={countx} </h3>
            <button onClick={incountx}>+1</button>
            <h3>County={county} </h3>
            <button onClick={incounty}>+1</button>
        </div>
    )
}  
// The useEffect Is Used To Perform Some Tasks Every Single Time The Component Is Rendered Or Its State Is Changed.