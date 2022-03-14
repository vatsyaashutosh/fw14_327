import { useState } from "react"; 
export function Counter({name,classname,remItem,totalItem,total}){
    const [counter,setCounter]= useState(total);
    const handleChange = (value)=>{
        if(counter+value>=0)
        setCounter(counter+value)
    }
return <><span>{name}:</span>
    <button className= {classname} onClick = {()=>handleChange(1)
         
        } >
        +
                  </button>
                   <button className={remItem} onClick = {()=>handleChange(-1)
         
        }>
        -
    </button>
    <span className={totalItem}>{counter}</span></>
}