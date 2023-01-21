import React from "react"
import "../css/card.css"
import "../images/image3.png"
import webdata from "./data"

export function Cardssd(){
    return(
        <div className="main_div">
            <div className="one">
                <img src={require("../images/image1.png")} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    <span className="smallText">5.0 (6)  USA</span>
                    <h1 className="smallText2">Life lessons with Katie Zaferes</h1>  
                    <h3 className="smallText3">From $136 / person</h3>
                </div>
            </div>
            <div className="one">
                <img src={require("../images/image2.png")} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    <span className="smallText">5.0 (7)  USA</span>
                    <h1 className="smallText2">waifu</h1>  
                    <h3 className="smallText3">From $69 / person</h3>
                </div>
            </div>
            <div className="one">
                <img src={require("../images/image3.png")} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    <span className="smallText">5.0 (8)  USA</span>
                    <h1 className="smallText2">bike</h1>  
                    <h3 className="smallText3">From $1 / person</h3>
                </div>
            </div>
        </div>
    )
}


export default function Card(){
    const obj = webdata.map(ele=>{
        return <ContactOrdinary
            img = {ele.coverImg}
            item = {ele}
            // name = {ele.title}
            // phone = {ele.stats.rating}
            // email = {ele.openSpots}
        />
    });

    return (
        <div className="contacts">
            {obj}
            {/* <Testing
                name = "string"
                isHuman = {true}
                age = {22}
                listt = {[{"shan":1, "tanu":2}]}
            /> */}
        </div>
    )  
}

export function ContactOrdinary(props){
    console.log(props.img);
    return(
        <div className="main_div">
            <div className="one">
                <img src={"../images/image3.png"} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    <span className="smallText">{props.name}</span>
                    <h1 className="smallText2">Life lessons with Katie Zaferes</h1>  
                    <h3 className="smallText3">{`concatinating string mail:${props.email}`} From $136 / person</h3>
                </div>
            </div>
        </div>
    )
}


export function Contact({img, name, phone, email}){
    console.log(email);
    return(
        <div className="main_div">
            <div className="one">
                <div className="soldout">SOLD OUT</div>
                <img src={img} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    {name && <span className="smallText">{name}</span>}
                    
                    {/* conditional rendering  */}
                    {/* if name given then only render  */}
                    <h3 style = {{display: email? "block": "none" }} className="smallText3">{email} From $136 / person</h3>
                    <h3 className="smallText3">Phone : {`number is :${phone}`}</h3>  {/* concatenation */}
                </div>
            </div>
        </div>
    )
}


export function MapData(props)
{
    return(
        <div className="main_div">
            <div className="one">
                <img src={props.coverImg} className="cardImage" />
                <img src={"../images/image3.png"} className="cardImage" />
                <div className="smallTextDiv">
                    <img src={require("../images/Star.png")} className="star" />
                    <span className="smallText">{props.title}</span>
                    {/* <h1 className="smallText2">{props.}</h1>   */}
                    <h3 className="smallText3">{props.stats.rating} : {props.location}</h3>
                </div>
            </div>
        </div>
    )
}


export function Testing(prop){
    //console.log(prop.listt)
    return(
        <div>
            prop passed 
        </div>
    )
}
