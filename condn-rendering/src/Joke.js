import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false);

    function changeShow() {
        setIsShown( prevShow => !prevShow);
    }

    return (
        <div>
            {props.setup && <h3> {props.setup}</h3>}

            <button onClick={changeShow}>{isShown ? "hide" : "show"}</button>

            {isShown && <p>{props.punchline}</p>}
            
            <hr/>
        </div>
    )
}