import { useState, useEffect } from "react";
import AddHotelForm from "./AddHotelForm";

const Hotels = () => {
  const [Hotels, setHotels] = useState([]);
  const [add, setAdd] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [oneData, setOneDat] = useState();
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const localHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(localHotels);
  }, []);

  const handleAddItem = (newHotel, index) => {
    console.log("handleAddItem called with:", newHotel, index);
    let updatedHotels;
    if (index !== null) {
      updatedHotels = Hotels.map((hotel, i) => (i === index ? newHotel : hotel));
    } else {
      updatedHotels = [...Hotels, newHotel];
    }
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    setAdd(false);
    setEditForm(false);
  };

  const truncateDescription = (desc, expanded) => {
    const words = desc.split(" ");
    if (expanded) {
      return desc; 
    }
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : ""); 
  };

  const toggleExpandDesc = (id) => {
    setExpandedDesc(expandedDesc === id ? null : id); 
  };

  const handleEditForm = (index) => {
    setEditForm(true);
    setOneDat(Hotels[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmed) {
      const updatedHotels = Hotels.filter((_, i) => i !== index);
      setHotels(updatedHotels);
      localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    }
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
            {Hotels.map((hotel, index) => (
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
                <td className="border border-gray-300 p-2">
                  {hotel.rating} ⭐
                </td>
                <td className="border border-gray-300 p-2">
                  {hotel.freeCancellation ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 p-2">
                  {hotel.reserveNow}
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="flex flex-col">
                    <p className="mb-2">
                      {truncateDescription(
                        hotel.desc,
                        expandedDesc === hotel.id
                      )}
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
                  <button
                    onClick={() => handleEditForm(index)}
                    className="bg-blue-500 mb-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-6" onClick={() => setAdd(true)}>
          Add Item
        </button>

        {add && <AddHotelForm onAddItem={handleAddItem} />}
        {editForm && (
          <AddHotelForm
            onAddItem={handleAddItem}
            actualdata={oneData}
            index={editIndex}
          />
        )}
      </div>
    </>
  );
};

export default Hotels;
