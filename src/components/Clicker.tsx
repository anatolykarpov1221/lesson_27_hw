import { useState } from "react";


export default function Clicker() {

  const [state,setState]=useState<number>(10)
const handlerRight = (event:React.MouseEvent):void=>{
    event.preventDefault();
        console.log(state+1);
}
const handlerLeft = ():void =>{
    console.log(state-1)
}
    

  return (
        <div>
    <button onClick={()=> setState(state +1)}>+</button>     
    <button onClick={()=>setState(state===0? state:state-1)}>-</button>
    <button onClick={handlerLeft} onContextMenu={handlerRight}>+/-</button>
    <p>{state}</p>     
         </div>
    )
}





// const handler = ():void => {
    //     setState(state+1);
    // };
    // const handler2 = ():void => {
    //     setState(state-1);
    // };