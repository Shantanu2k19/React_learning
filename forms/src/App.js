import React from "react"

export default function App(){

  const [data, setData] = React.useState({
    fname : "shan",
    lname : "shann",
    text : "",
    isFriendly : true,
    employment : "",
    favColor : "",
  });

  // console.log(data.fname, '--', data.lname, '---', data.text);
  // console.log(data.favColor)

  function handleChange(event)
  {
    // console.log(event.target)

    const {name, value, type, checked} = event.target

    setData( prevVal => {
      return {
        ...prevVal,
        [name] : type=="checkbox" ? checked : value,
      }
    });
  }

  function handleSubmit(event){
    event.preventDefault(); //wont refresh the whole page, render the page with values after submitting 
    
    if(data.fname!=data.lname) {
      console.log("names dont match")
      return
    }
    else {
      if(data.favColor!="") console.log("fav col selected ")
      else console.log("fav col NOT selected ")
    }

    console.log("submitted")

    //call API here with the data 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="first data"
        onChange={handleChange}
        name="fname"
        value={data.fname}  //controlled component
      />

      <input 
        type="text"
        placeholder="last data" 
        onChange={handleChange}
        name="lname"
        value={data.lname}
      />

      <textarea 
        placeholder="Comments"
        onChange={handleChange}
        name="text"
        value={data.text}
      />

      <br />

      <input 
        type="checkbox" 
        id="cbx1" 
        checked={data.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="cbx1">Are you friendly?</label>

      <br />
      <br />

   
      <fieldset>
        <legend>Current employment status</legend>
        
        <input 
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={data.employment==="unemployed"}  //not a boolean value but we made it here
            onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        
        <input 
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={data.employment==="part-time"}
            onChange={handleChange}            
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        
        <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={data.employment==="full-time"}
            onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <br />


      {/* select box  */}
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select 
        id="favColor"
        value={data.favColor}
        onChange={handleChange}
        name="favColor"
      >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
      </select>

      <br />
      <br />

      {/* if button is found inside form element, it acts as a submit button (by default), no need to add input of type submit*/}
      {/* it will trigger form's onSubmit eventhandler */}
      <button>Submit</button>
    </form>
  )
}

/*
CONTROLLED COMPONENT
state maintiaing should be of single source of truth ...?..what??,,,.
both react state and input box have their own states, but we need react to drive the input not the inout state,
we use value here,
the input value will call handleChange function, which will change the state, changing the input value as well 
basically react state is in the driving seat here
*/