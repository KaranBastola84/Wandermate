import { useState } from "react";
import './App.css';
import Login from "./assets/Login";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import SignUpp from "./SignUpp";
import SetupPage from "./SetupPage";

function App() {

  return (
    <>
      <div>
        <SignUpp />
      </div> 
    </>
  )
}

export default App;