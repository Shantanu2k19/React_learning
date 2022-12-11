//using unified state instead of derived state
//we now will not pass the initial state to the component
//rather tell the parent state to change state using a function
//this is more complex but recommended method 

import React from "react"

export default function Boxtest2(prop) {

    const JSXstyles = {
        border: "2px solid black", 
        height: "20px", 
        width: "200px", 
        margin: "5px",
        backgroundColor:  prop.on ? "red":"transparent",
    };
      
    return (
        <div 
            onClick = {()=>prop.handleToggle(prop.id)}  //a function that is calling handleToggle, 
            //in this way so we can pass a parameter to the function 
            
            style={JSXstyles} 
            key={prop.id}
        >
        </div>
    )
  }
  