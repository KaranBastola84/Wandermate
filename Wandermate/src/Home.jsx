import React, { useEffect, useState } from "react";
import HomeNav from './HomeNav'
import Footer from './Footer'
import haha from './assets/userProfile.jpg'



const TopHotels = () => {
  const [hotel, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
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
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <div>
        <HomeNav />
    <div>
    <div className="w-full h-[600px] pl-16 pr-16 pt-10 relative overflow-hidden ">
                        <img
                            src="src\assets\headerImg9.jpg"
                            className="w-full h-im rounded-2xl "
                            alt="No image available"
                        />
                        <h1 className=" ml-[450px] absolute top-1/2  text-1xl text-black p-4 bg-white bg-opacity-90 rounded-md ">
                            <input type='text' placeholder=' Search for travel destination...' className="w-[250px]" /> 
                        </h1>
                    </div>
    </div>
        <div className="topd">
        <div className="flex pl-14 pt-6">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold  w-[150px]">Top Destination</button>
        </div>
      </div>
        <div className="bg">
          <div className=" pr-8 pl-8">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {hotel.slice(0, 4).map((hotel) => (
                  <div className=" relative" key={hotel.id}>
                    <img
                      className="rounded-2xl"
                      src={hotel.img}
                      alt={hotel.name}
                      style={{ width: "680px", height: "400px" }}
                    ></img>
                    <div className="w-full flex justify-center items-center absolute bottom-0 right-0 left-0 backdrop-blur-lg h-[55px] rounded-b-2xl"></div>
                    <div className="absolute bottom-0 flex p-4 w-full justify-between z-10">
                      <h2 className="text-medium text-white  font-bold ">
                        Name: {hotel.name}
                      </h2>
                      <p className="text-medium text-white font-bold ">
                        {hotel.price} $
                      </p>
                    </div>
                    <img
                      className="w-7 h-7 cursor-pointer absolute top-2 left-2 drop-shadow-lg"
                      src="https://cdn-icons-png.flaticon.com/128/4436/4436444.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="topd">
        <div className="flex pl-14 pt-6">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold">Top Hotels</button>
        </div>
      </div>

<div className="bg">
          <div className=" pr-8 pl-8">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {hotel.slice(0, 4).map((hotel) => (
                  <div className=" relative" key={hotel.id}>
                    <img
                      className="rounded-2xl"
                      src={hotel.img}
                      alt={hotel.name}
                      style={{ width: "680px", height: "400px" }}
                    ></img>
                    <div className="w-full flex justify-center items-center absolute bottom-0 right-0 left-0 backdrop-blur-lg h-[55px] rounded-b-2xl"></div>
                    <div className="absolute bottom-0 flex p-4 w-full justify-between z-10">
                      <h2 className="text-medium text-white  font-bold ">
                        Name: {hotel.name}
                      </h2>
                      <p className="text-medium text-white font-bold ">
                        {hotel.price} $
                      </p>
                    </div>
                    <img
                      className="w-7 h-7 cursor-pointer absolute top-2 left-2 drop-shadow-lg"
                      src="https://cdn-icons-png.flaticon.com/128/4436/4436444.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="topd">
        <div className="flex pl-14 pt-6">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold  w-[200px]">Top Travel Packages</button>
        </div>
      </div>

<div className="bg">
          <div className=" pr-8 pl-8">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {hotel.slice(0, 4).map((hotel) => (
                  <div className=" relative" key={hotel.id}>
                    <img
                      className="rounded-2xl"
                      src={hotel.img}
                      alt={hotel.name}
                      style={{ width: "680px", height: "400px" }}
                    ></img>
                    <div className="w-full flex justify-center items-center absolute bottom-0 right-0 left-0 backdrop-blur-lg h-[55px] rounded-b-2xl"></div>
                    <div className="absolute bottom-0 flex p-4 w-full justify-between z-10">
                      <h2 className="text-medium text-white  font-bold ">
                        Name: {hotel.name}
                      </h2>
                      <p className="text-medium text-white font-bold ">
                        {hotel.price} $
                      </p>
                    </div>
                    <img
                      className="w-7 h-7 cursor-pointer absolute top-2 left-2 drop-shadow-lg"
                      src="https://cdn-icons-png.flaticon.com/128/4436/4436444.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    </>
  );
};
export default TopHotels;
