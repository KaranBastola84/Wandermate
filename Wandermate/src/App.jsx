import { useState } from "react";
import './App.css';
import Login from "./assets/Login";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import SignUpp from "./SignUpp";
import SetupPage from "./SetupPage";
import Hotels from "./Hotels";
import Destination from "./Destination";
import TravelPackage from "./TravelPackage";
import ThingsToDo from "./ThingsToDo";
import ImageSlider from "./ImageSlider";
import Landing from "./Landing";
import Footer from "./Footer";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/SignUpp" element={<Login />} />
        <Route path="/Login" element={<SignUpp />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/TravelPackage" element={<TravelPackage />}></Route>
        <Route path="/ThingsToDo" element={<ThingsToDo />}></Route>
        <Route path="/ImageSlider" element={<ImageSlider />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
      
      </BrowserRouter> 
      {/* <SetupPage/> */}
      {/* <ImageSlider /> */}
      {/*  <Landing />  */}

      
    </>
  )
}

export default App;