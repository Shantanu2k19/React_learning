import React from "react"
import './modal.css'

export default function Modal(){

    const [enabled, setEnabled] = React.useState(false);
    
    function showPopup(){
        setEnabled(!enabled);
    }

    return (
        <>
            <button onClick={showPopup}> hello </button>
   
            <div className="globalDiv" style={ enabled? {top:"50%"}: {top:"-100px"}}>
                kya kiya yaar 
            </div>

       </>
    )
}