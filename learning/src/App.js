import './App.css';
import Child from "./child"
import React from "react"
import Boxtest from "./box"
import boxdata from "./box_data.js"

function App() {
  const [starProp, setStarProp] = React.useState({
    show_color : false,
    item : "lol"
  });

  function changeColor() {
    console.log("clicked");
    setStarProp(prevContact => {
      return {
          ...prevContact,
          show_color: !prevContact.show_color
      }
    })
  }

  const boxSection = boxdata.map(
    individual =>(
      <Boxtest key={individual.id} on={individual.on}/>
    )
  )

  return (
    // <div onClick={changeColor}>
    <div>
      Hello react! <br/>

      <hr/>

      <Child 
        starProperty = {starProp} 
        handleClick = {changeColor}
      />

      <hr/>

      {boxSection}
      {/* send a prop to child component defining property  */}
      {/* also send the event listner function to child to control the state of element from child  */}
    </div>
  );
}

export default App;


/*
state in react 
  let [imgUrl, setImgUrl] = React.useState(""); //default value in ""
  we can change state by a jf function called using evenhandlers like onClick


  ways to change state 

  const [isGoingOut, setIsGoingOut] = React.useState(true)
  function changeMind() {
      //using callback fn
      // setIsGoingOut(prevState => !prevState)
      // setIsGoingOut(prev => prev ? false: true)  
      setIsGoingOut( function (oldVal) {
          return oldVal==true? false: true;
      })
  }



  //array spreader 
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      setThingsArray(prevThingsArray => {
          return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
          //array spread operator 
      })
  }
    
*/

/*
//MULTIPLE objects in State + array spreader

 const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,  //SPREAD all preoprties 
                isFavorite: !prevContact.isFavorite
            }
        })
    }
*/



