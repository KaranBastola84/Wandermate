import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function ViewDeal() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/hotels/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl">Error: {error}</div>;
  }

  if (!hotel) {
    return <div className="flex justify-center items-center h-screen text-xl">No hotel found.</div>;
  }

  return (
    <>
      <div className="Header">
        <HomeNav />
      </div>

      <div className="flex justify-center items-center h-[550px] ">
        <div className="flex w-4/5 h-4/5 bg-white shadow-lg">
          <div className="flex-1 flex justify-center items-center gap-2">
            <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 ">
            {/* Adjust these if you have multiple images */}
            {hotel.images?.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={image} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Hotel Details</h2>
            <p className="text-gray-700">Price: <span className="font-semibold">${hotel.price}</span></p>
            <p className="text-gray-700">Rating: <span className="font-semibold">{hotel.rating} stars</span></p>
            <p className="text-gray-700">{hotel.desc}</p>
            <p className="text-gray-700">Free Cancellation: <span className="font-semibold">{hotel.freeCancellation ? 'Yes' : 'No'}</span></p>
            <p className="text-gray-700">Reserve Now: <span className="font-semibold">{hotel.reserveNow ? 'Yes' : 'No'}</span></p>
            <Link to={`/travels/${hotel.id}`}>
              <button className='text-black bg-blue-500 text-md p-2 px-4 rounded-md m-1'>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default ViewDeal;
