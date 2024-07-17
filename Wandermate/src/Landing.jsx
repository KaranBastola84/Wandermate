import React, { useEffect } from "react";
import user from "./assets/userProfile.jpg";
import ImageSlider from "./ImageSlider";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";
import bg5 from "./assets/bg5.jpg";
import Gym from "./assets/Gym.jpg";
import Spa2 from "./assets/Spa2.jpg";
import Tennis3 from "./assets/Tennis3.jpg";
import Swimming5 from "./assets/Swimming5.jpg";
import Nav from "./Nav"
import Footer from "./Footer";
import { useState } from "react";

function Landing() {
  const [hotel,setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    const fetchHotels = async () => {
      try{
        const response = await fetch('http://localhost:3000/hotels');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      }
      catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchHotels();
  },[]);
  if(loading){
    return <p>Loading...</p>
}
if(error){
    return <p>Error: {error}</p>
}

  return (
    <>
      <div className="flex gap-80 ">
        <div className="w-28 h-16">
          <h1 className="text-blue-500 font-bold text-center p-4">
            Wandermate
          </h1>
        </div>
        <div className=" h-16 text-center">
          <nav className="flex-row flex text-center gap-16 p-4 font-bold">
            <ol>Home</ol>
            <ol>Destination</ol>
            <ol>TravelPackage</ol>
            <ol>Hotels</ol>
          </nav>
        </div>
        <div className=" h-12 w-28 flex items-center justify-center ">
          <img
            src={user}
            alt=""
            className="h-full  rounded-full object-cover"
          />
        </div>
      </div>
      <ImageSlider />
     <div className="pl-24 pr-14 mb-8 mt-5">
      <div className="pl-12 pr-10 flex flex-col gap-5">
      <div className="w-auto h-96">
          {hotel.slice(0,4).map((hotels => {
            <li key={hotel.id}> 
            <h2> ID : {hotel.id} </h2>
            </li>

          }))}

     </div>
      </div>
     </div>
      <Footer />
    </>
  );
}

export default Landing;