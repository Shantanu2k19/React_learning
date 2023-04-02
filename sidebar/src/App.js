import React, { useState, useEffect, Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div >
      {this.state.matches && (<h1>Big Screen</h1>)}
      {!this.state.matches && (<h3>Small Screen</h3>)}
      </div>
    );
  }
}


export default App;


function App2() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);
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

    if(screenWidth<=620)
    {
      if(headerOpen)
      {
        setHeaderOpen(false);
      }
    }
    else
    {
      if(!headerOpen)
      {
        setHeaderOpen(true);
      }
    }


  }, [screenWidth])

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <span>
       {headerOpen && <Header onClick={handleViewSidebar} />}
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </span>
  );
}
