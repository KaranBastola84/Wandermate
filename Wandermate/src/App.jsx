import { useState } from "react";
import './App.css';
import Login from "./assets/Login";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import SignUpp from "./SignUpp";
import SetupPage from "./SetupPage";
import Demo from "./Demo";
import Hotels from "./Hotels";
import Destination from "./Destination";

function App() {

  return (
    <>
     {/* <Demo /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/SignUpp" element={<Login />} />
        <Route path="/Login" element={<SignUpp />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Destination" element={<Destination />} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;