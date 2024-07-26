import React, { useEffect, useState } from "react";

const AddHotelForm = ({ onAddItem, actualdata, index }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    rating: "",
    freeCancellation: false,
    reserveNow: "",
    desc: "",
  });

  useEffect(() => {
    if (actualdata) {
      setFormData({
        id: actualdata.id,
        name: actualdata.name,
        price: actualdata.price,
        img: actualdata.img,
        rating: actualdata.rating,
        freeCancellation: actualdata.freeCancellation,
        reserveNow: actualdata.reserveNow,
        desc: actualdata.desc,
      });
    }
  }, [actualdata]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      ...formData,
      id: formData.id || Date.now().toString(),
    };
    console.log("Form submitted with:", newHotel);
    onAddItem(newHotel, index);
    setFormData({
      id: "",
      name: "",
      price: "",
      img: "",
      rating: "",
      freeCancellation: false,
      reserveNow: "",
      desc: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 mt-4">
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image URL:</label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Free Cancellation:</label>
        <input
          type="checkbox"
          name="freeCancellation"
          checked={formData.freeCancellation}
          onChange={handleChange}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Reserve Now:</label>
        <input
          type="text"
          name="reserveNow"
          value={formData.reserveNow}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {index !== null ? "Update " : "Add Hotel"}
      </button>
    </form>
  );
};

export default AddHotelForm;
