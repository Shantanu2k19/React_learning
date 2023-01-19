import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

  const [abhay, setColor] = React.useState("red");

  function changeColor(){
    console.log(abhay);

    let newVal;

    if(abhay == "red")
    {
      newVal = "blue";
    }
    else newVal = "red";

    //if ciondition ? true : false; 



    setColor(newVal);

    // setColor(prevVal => {
    //   return prevVal === "red" ? "blue" : "red";
    // })


  }

  return (
    <div className="App">

    {/* <input>button <input/> */}
    <br/>


    <button onClick={changeColor}>
      changeColor
    </button>

    <br/>
    <br/>
    <br/>
    <br/>

    <span style={{color: abhay}}>Hello</span> 
    </div>
  );
}

export default App;
