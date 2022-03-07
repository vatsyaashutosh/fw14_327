import { useState } from "react"; 
export function Counter(prop){
    const [counter,setCounter]= useState(prop.total);
    const handleChange = (value)=>{
        if(counter+value>=0)
        setCounter(counter+value)
    }
return <><span>{prop.name}:</span>
    <button className= {prop.classname} onClick = {()=>handleChange(1)
         
        } >
        +
    </button>
    <button className={prop.remItem} onClick = {()=>handleChange(-1)
         
        }>
        -
    </button>
    <span className={prop.totalItem}>{counter}</span></>
}