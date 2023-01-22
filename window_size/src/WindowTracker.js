import React from "react"

export default function WindowTracker() {

    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        // window.addEventListener("resize", function() {
        //     // console.log("Resized")
        //     setWidth(window.innerWidth)
        // })

        function watchWidth() {
            console.log("Setting up...")
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)
        
        //cleanup function for side effects 
        return function () {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {width}</h1>
    )
}