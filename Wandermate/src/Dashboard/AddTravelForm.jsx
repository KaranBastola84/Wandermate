import React from 'react'

function AddTravelForm() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        img: "",
        desc: ""
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Generate a unique id if not provided
        const newHotel = {
          ...formData,
          id: formData.id || Date.now().toString(), 
        };
        onAddItem(newHotel);
        
        const savedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
        localStorage.setItem("hotels", JSON.stringify([...savedHotels, newHotel]));
        setFormData({
            name: "",
            price: "",
            img: "",
            desc: ""
        });
      };
  return (
   <>
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
        <label className="block mb-2">Description:</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Hotel
      </button>
    </form>
   </>
  )
}

export default AddTravelForm
