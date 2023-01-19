import React from 'react';

export default function Child(prop){

    //console.log(prop)
    const iconCol = prop.starProperty.show_color ? "yellow.png" : "black.png";
    return (
        <img
            src={`../images/${iconCol}`} className="starImg"
            onClick={prop.handleClick}
        />
    )
}