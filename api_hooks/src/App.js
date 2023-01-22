import React from "react"

export function App0() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // console.log("Component rendered")
    
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
        
    // side effects

    /*
    causes an infinite loop : Why? 
    fetch is consodered side effect because it reaches outside of reacts ecosystem 
    and also updates react state in the process 

    it was fetching the data and modifying the state, which in turn will re-render 
    component, fetching the data again 

    solution : app1
    */ 
    
    return (
        <div>
            <p>Hey</p>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export function App1() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)
  
  // side effects 
  //passed a callback function and used useEffect, 
  //also have to pass additional for useEffect to work (otherwise same as app0)
  //changed : useEffect will only run after react have painted the components on the page (return)
  
  //try to learn the flow here using console log statements 
  console.log("")
  console.log("component render")

  React.useEffect(function() {
      console.log("Effect cb fn ran")

      // fetch("https://swapi.dev/api/people/1")
      //     .then(res => res.json())
      //     .then(data => setStarWarsData(data))
  // }, [])

  //dependencies array 
  //if values in array changes from one render to another, the effect wil run
  //essentially limiting the time, the effect will run 

  //adding empty array : run only once when rendered for the first time 
  //TRY : effect cb will concole.log only once in empty [] array case 

  //to run everytime count change : 
  }, [count])

  return (
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}

export function App2() {
  //this will fetch data only once
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log("")
  console.log("component render")

  React.useEffect(function() {
      console.log("Effect cb fn ran")

      fetch("https://swapi.dev/api/people/1")
          .then(res => res.json())
          .then(data => setStarWarsData(data))
  }, [])

  return (
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}

export default function App3() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(function() {
      console.log("Effect ran")
      fetch(`https://swapi.dev/api/people/${count}`)  // fetch("https://swapi.dev/api/people/"+count) 
          .then(res => res.json())
          .then(data => setStarWarsData(data))
  }, [count])
  
  return (
      <div>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}