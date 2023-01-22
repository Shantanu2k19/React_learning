import React from "react"
import WindowTracker from "./WindowTracker"
import "./style.css"

export default function App() {
    //toggling the switch and resizing the window changes the number 
    //we can do better 
    const [show, setShow] = React.useState(true);
    
    function changeShow() {
        console.log(show)

        setShow(prevVal=> !prevVal)
    };
    
    return (
        <div className="container">
            <button onClick={changeShow}>
                Toggle WindowTracker
            </button>
            { show && <WindowTracker /> }
        </div>
    )
}

/*
if we turn off the window tracker, from here, it will be removed(unmounted) but not the event listner
giving the warning, its called Memory leak here 
*/