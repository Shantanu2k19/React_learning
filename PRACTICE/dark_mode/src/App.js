import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    const [mode, setMode] = React.useState(false);

    function toggleMode(){
        setMode(prevVal => !prevVal);
    }

    return (
        <div className="container">
            <Navbar
                darkMode={mode}
                toggleDarkMode={toggleMode}
            />
            <Main 
                darkMode={mode}
                toggleDarkMode={toggleMode}
            />
        </div>
    )
}