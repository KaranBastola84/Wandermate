import Footer from "./Footer";
import HomeNav from "./HomeNav";
import React, { useEffect, useState } from "react";

function TopTravelPackage() {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const response = await fetch("http://localhost:3000/travelPackages");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
          setHotels(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchHotels();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  

  return (
    <>

<div className="Header">
        <HomeNav />
      </div>

      {hotels.map((hotels) => (
        <div key={hotels.id} className=" shadow-xl ">
          <div className="h-[390px] w-[1200px]  ml-14 mt-8 flex flex-row">
            <div className="h-[390px] w-[550px] overflow-hidden flex ">
              <img src={hotels.img} alt={hotels.name} className="object-cover h-[500px]"  />
            </div>
            <div>
              <h1 className=" pl-[260px] mt-20 text-2xl font-bold">{hotels.name}</h1>
              <h1 className=" pl-[320px] mt-2 text-2xl font-bold">${hotels.price}</h1>
              <div className="pl-[290px] mt-5 ">
                <button className="bg-black text-white">View Deal!</button>
              </div>
              <div className=" Arrow w-[200px] ml-[270px] mt-2">
                <p className="mb-2 font-serif">✓ Free Cancellation</p>
                <p className="font-serif w-[200px]">✓ Reserve now, pay to stay.</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="Footer">
        <Footer />
      </div>

    </>
  )
}

export default TopTravelPackage
