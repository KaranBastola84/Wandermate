import Footer from "./Footer";
import HomeNav from "./HomeNav";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopHotels() {
  const [hotels, setHotels] = useState([]);
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
        setHotels(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
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

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <>
      <div className="Header">
        <HomeNav />
      </div>

      {hotels.map((hotel) => (
        <div key={hotel.id} className="shadow-xl p-4 mb-4">
          <div className="h-[390px] w-full flex flex-col md:flex-row">
            <div className="h-[390px] w-full md:w-[550px] overflow-hidden flex">
              <img
                src={hotel.img}
                alt={hotel.name}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-between p-4">
              <h1 className="text-2xl font-bold">{hotel.name}</h1>
              <h2 className="text-xl font-bold">${hotel.price}</h2>
              <div className="mt-4">
                <Link to={`/ViewDeal/${hotel.id}`}>
                  <button className="bg-black text-white px-4 py-2 rounded">
                    View Deal!
                  </button>
                </Link>
              </div>
              <div className="mt-2">
                <p className="mb-2 font-serif">✓ Free Cancellation</p>
                <p className="font-serif">✓ Reserve now, pay to stay.</p>
              </div>
              <div className="mt-2">
                <h1>{renderStars(hotel.rating)}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default TopHotels;
