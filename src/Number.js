import React, { useState } from 'react'

export default function Number() {

  const[number, setNumber] = useState(0);

  const handleCounter = (counter) => {
    setNumber(counter === "+" ? number + 1 : number === 0 ? 0 : (state)=>state - 1);
  }
  return (
    <div style={{display : "flex"}}>
      <button onClick={()=>handleCounter("-")}>-</button>
      <h3>{number}</h3>
      <button onClick={()=>handleCounter("+")}>+</button>
    </div>
  )
}
