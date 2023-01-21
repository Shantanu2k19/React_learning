import React from "react"
import ReactDOM from "react-dom"
import Hero from "./components/hero.js"
import Card from "./components/card.js"
import "./images/image3.png"


export default function Page () {
  return(
    <div>
      <Hero/>
      <Card/>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))