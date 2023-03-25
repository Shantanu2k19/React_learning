import './App.css';
import Chats from "./chat.js"// ES6 Imports
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="global">
     <div className='left'>
      left side
     </div>
     <div className='right'>
        right side 
        <hr/>
        <div>
          <Chats />
        </div>
      </div>

    </div>
  );
}

export default App;
