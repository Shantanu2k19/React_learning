// import React from "react";
import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import "./loggedin.css";
// import { CSSTransition } from 'react-transition-group';
import "./button.css";
// import SunIcon from "./moon.png";
// import MoonIcon from "./sun.png";

export default function Lol() {
  console.log("page");

  const MyComponent = styled.div`
    display: none;

    @media (max-width: 620px) {
      display: inline;
    }
  `;

  //sidebar using react
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(screenWidth);

    if (screenWidth <= 620) {
      setSideBarOpen(false);
    } else {
      setSideBarOpen(true);
    }
    console.log("setting");
  }, [screenWidth]);

  const toggleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const closeSidebarFromContent = () => {
    if (sidebarOpen) setSideBarOpen(false);
  };


  //BUTTON
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  const updateTheme = (isDarkEnabled) => {

    // Get all available styles
    const styles = getComputedStyle(document.body);
  
    // Get the --black and --white variable values
    const black = styles.getPropertyValue("--black");
    const white = styles.getPropertyValue("--white");

    // Optional shorthand constant for accessing document.documentElement
	const docEl = document.documentElement;

  
    if (isDarkEnabled) {
      docEl.style.setProperty("--background", black);
      docEl.style.setProperty("--foreground", white);
    } else {
      docEl.style.setProperty("--background", white);
      docEl.style.setProperty("--foreground", black);
    }
  };

useEffect(() => {
	// Pass in the isEnabled state
  updateTheme(isEnabled);
}, [isEnabled]);


  return (
    <div className="home">
      <>
        <div
          className="sidebar"
          style={
            screenWidth <= 620
              ? sidebarOpen
                ? { left: "0px", position: "absolute" }
                : { left: "-200px", position: "absolute" }
              : sidebarOpen
              ? { left: "0px" }
              : { left: "-200px" }
          }
        >
          sidebar
          <hr />
          <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
              <span className="hidden">
                {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
              </span>
              <div className="icons">
                <img className="iconkk" src="moon.png"></img>
                <img  className="iconkk" src="sun.png"></img>

                {/* <MoonIcon /> */}
              </div>
              <input
                id="toggle"
                name="toggle"
                type="checkbox"
                checked={isEnabled}
                onClick={toggleState}
              />
            </div>
          </label>
          <hr />
        </div>
        {sidebarOpen && screenWidth <= 620 && (
          <button className="lol" onClick={toggleSidebar}>
            closse
          </button>
        )}
      </>

      {sidebarOpen && screenWidth <= 620 && (
        <div className="overlay" onClick={closeSidebarFromContent}></div>
      )}
      <div className="content">
        <MyComponent>
          <div className="header">
            header
            <button onClick={toggleSidebar}>switch</button>
          </div>
        </MyComponent>

        <div className="insideContent">content area (content is the king)</div>
      </div>
    </div>
  );
}
