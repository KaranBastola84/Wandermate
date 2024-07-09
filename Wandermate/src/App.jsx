import { useState } from "react";
import './App.css';
import Login from "./assets/Login";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import Nav from "./Nav";
import MyFirst from "./MyFirst";
import MySecond from "./MySecond";
import MyThird from "./MyThird";
import SetupPage from "./SetupPage";

function App() {

  return (
    <>
      <div>
        <SetupPage/>
      </div> 
    </>
  )
}

export default App;