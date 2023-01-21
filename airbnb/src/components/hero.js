import React from "react"

import "../css/hero.css"
import "../images/logo.png"

export default function Hero(){
    return (
        <section className="hero">   
            <Navbar />
            <br/>
            <img src={require("../images/img_group.png")} className="group_img" />
            <p className="hero_text1">Online Experiences</p>
            <p className="hero_text2">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export function Navbar(){
    return (
    <div className="hero_div">
        <img src={require("../images/logo.png")} className="nav_icon" />
        <div className="navTextDiv"><h3 className="nav_text">1st Project</h3></div>
    </div>
    )
}