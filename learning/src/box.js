import React from "react"

export default function Boxtest(prop) {

    const initial = prop.on ? "red":"transparent";
    const [backCol, setBackCol] = React.useState(initial);
    
    function changeColor(){
      console.log("clicked box");
      setBackCol( function(oldVal){
        return oldVal=="transparent"? "red":"transparent";
      })
    }
  
    // styles can also be done inline
    const JSXstyles = {
        border: "2px solid black", 
        height: "20px", 
        width:"200px", 
        margin: "5px",
        backgroundColor: backCol,
        };
      
    return (
        <div 
            onClick = {changeColor}
            style={JSXstyles} 
            // two brackets here, one to get into javascript from jsx, second curly braces for javascript object 
            key={prop.id}
        >
        </div>
    )
  }
  