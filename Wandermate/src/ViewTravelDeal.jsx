import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ViewTravelDeal() {
  const { id } = useParams();
  const [travelPackage, setTravelPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravelPackage = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/travelPackages/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTravelPackage(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTravelPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Error: {error}
      </div>
    );
  }

  if (!travelPackage) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        No travel package found.
      </div>
    );
  }

  return (
    <>
      <div className="Header">
        <HomeNav />
      </div>

      <div className="flex justify-center items-center h-[550px] ">
        <div className="flex w-4/5 h-4/5 bg-white shadow-lg">
          <div className="flex-1 flex justify-center items-center gap-2">
            <img
              src={travelPackage.img}
              alt={travelPackage.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 ">
            {travelPackage.images?.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Travel Package Details</h2>
            <p className="text-gray-700">Price: <span className="font-semibold">${travelPackage.price}</span></p>
            <p className="text-gray-700">Rating: <span className="font-semibold">{travelPackage.rating} stars</span></p>
            <p className="text-gray-700">{travelPackage.description}</p> {/* Updated field name */}
            <p className="text-gray-700">Free Cancellation: <span className="font-semibold">{travelPackage.freeCancellation ? 'Yes' : 'No'}</span></p>
            <p className="text-gray-700">Reserve Now: <span className="font-semibold">{travelPackage.reserveNow ? 'Yes' : 'No'}</span></p>
            <Link to={`/travels/${travelPackage.id}`}>
              <button className='text-black bg-blue-500 text-md p-2 px-4 rounded-md m-1'>View</button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Reviews</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700"><span className="font-semibold">John Doe:</span> Great experience, highly recommend!</p>
                <p className="text-gray-500">Rating: 5 stars</p>
                <div className="rating flex">
                  <input type="radio" id="star5" name="rating" value="5" className="hidden" />
                  <label htmlFor="star5" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star4" name="rating" value="4" className="hidden" />
                  <label htmlFor="star4" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star3" name="rating" value="3" className="hidden" />
                  <label htmlFor="star3" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star2" name="rating" value="2" className="hidden" />
                  <label htmlFor="star2" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star1" name="rating" value="1" className="hidden" />
                  <label htmlFor="star1" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700"><span className="font-semibold">Jane Smith:</span> Beautiful location, but service could be better.</p>
                <p className="text-gray-500">Rating: 3 stars</p>
                <div className="rating flex">
                  <input type="radio" id="star5" name="rating" value="5" className="hidden" />
                  <label htmlFor="star5" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star4" name="rating" value="4" className="hidden" />
                  <label htmlFor="star4" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star3" name="rating" value="3" className="hidden" />
                  <label htmlFor="star3" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star2" name="rating" value="2" className="hidden" />
                  <label htmlFor="star2" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star1" name="rating" value="1" className="hidden" />
                  <label htmlFor="star1" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700"><span className="font-semibold">Michael Brown:</span> Had an amazing time, will visit again!</p>
                <p className="text-gray-500">Rating: 4 stars</p>
                <div className="rating flex">
                  <input type="radio" id="star5" name="rating" value="5" className="hidden" />
                  <label htmlFor="star5" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star4" name="rating" value="4" className="hidden" />
                  <label htmlFor="star4" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star3" name="rating" value="3" className="hidden" />
                  <label htmlFor="star3" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star2" name="rating" value="2" className="hidden" />
                  <label htmlFor="star2" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                  <input type="radio" id="star1" name="rating" value="1" className="hidden" />
                  <label htmlFor="star1" className="text-gray-400 cursor-pointer transition-colors duration-300">&#9733;</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default ViewTravelDeal;
