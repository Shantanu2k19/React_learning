import './App.css';
import Child from "./child"
import React from "react"
import Boxtest from "./box"
import BoxTest2 from "./box2"

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

  //BOX 1
  const boxSection = boxdata.map(
    individual =>(
      <Boxtest key={individual.id} on={individual.on}/>
    )
  )



  //BOX 2 
  
  const [everyBox, setBackCol] = React.useState(boxdata);

  function toggle(id){

    //way 1
    /*
    setBackCol(prevVal => {
      const newVal = []

      for(let i=0; i<prevVal.length; i++){
        const currVal = prevVal[i];
        if(currVal.id === id){
          const updateVal = {
            ...currVal, 
            on: !currVal.on
          }
          newVal.push(updateVal);
        }
        else{
          newVal.push(currVal);
        }
      }
      return newVal;
    })
    */

    //way 2
    setBackCol(prevVal => {
      return prevVal.map((item) => {
        return item.id === id? {...item, on: !item.on} : item
      })
    })
  }

  const boxSection2 = everyBox.map(
    individual =>(
      <BoxTest2 
        key={individual.id} 
        on={individual.on} 
        handleToggle={toggle}
        id={individual.id}

        //other way 
        //handleToggle={() => toggle(individual.id)}
        //send the function with id from here itself

        //in box2.js
        //replace onClick = {()=>prop.handleToggle(prop.id)}  with onClick = {prop.handleToggle} :)
        //no need of id in this case 
      />
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

      {/* {boxSection} */}
      {/* send a prop to child component defining property  */}
      {/* also send the event listner function to child to control the state of element from child  */}


      {/* using unified state instead of derived state in box2 */}
      {boxSection2}

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



