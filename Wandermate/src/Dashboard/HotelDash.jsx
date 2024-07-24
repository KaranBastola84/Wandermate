import { useState, useEffect } from "react";
import AddHotelForm from "./AddHotelForm";

const Hotels = () => {
  const [Hotels, setHotels] = useState([]);
  const [ add, setAdd] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState(null); 

  useEffect(() => {
    const localHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(localHotels);
  }, []);

  const handleAddItem = (newHotel) => {
    const updatedHotels = [...Hotels, newHotel]; //
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    setAdd(false);
  };

  const truncateDescription = (desc, expanded) => {
    const words = desc.split(" ");
    if (expanded) {
      return desc; // Return full description if expanded
    }
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : ""); // Truncate description
  };

  const toggleExpandDesc = (id) => {
    setExpandedDesc(expandedDesc === id ? null : id); // Toggle expanded description
  };

  return (
    <>
      <div className="p-8">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Image Link</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Rating</th>
              <th className="border border-gray-300 p-2">Free Cancellation</th>
              <th className="border border-gray-300 p-2">Reserve Now</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Buttons</th>
            </tr>
          </thead>
          <tbody>
            {Hotels.map((hotel) => (   ////////////////
              <tr key={hotel.id}>
                <td className="border border-gray-300 p-2 w-32 overflow-hidden text-ellipsis whitespace-nowrap">
                  <a href={hotel.img} target="_blank" rel="noopener noreferrer">
                    {hotel.img}
                  </a>
                </td>
                <td className="border border-gray-300 p-2 pl-8 pr-8 ">
                  {hotel.name}
                </td>
                <td className="border border-gray-300 p-2 pl-6 pr-6 text-center">
                  ${hotel.price}
                </td>
                <td className="border border-gray-300 p-2">{hotel.rating} ⭐</td>
                <td className="border border-gray-300 p-2">
                  {hotel.freeCancellation ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 p-2">{hotel.reserveNow}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex flex-col">
                    <p className="mb-2">
                      {truncateDescription(hotel.desc, expandedDesc === hotel.id)}
                    </p>
                    <button
                      onClick={() => toggleExpandDesc(hotel.id)}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      {expandedDesc === hotel.id ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-blue-500 mb-3">Edit</button>
                  <button className="bg-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-6" onClick={() => setAdd(true)}>Add Item</button>

        {add && <AddHotelForm onAddItem={handleAddItem} />}
      </div>
    </>
  );
};

export default Hotels;
