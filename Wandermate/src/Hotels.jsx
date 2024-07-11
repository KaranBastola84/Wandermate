import React from 'react'
import { useEffect,useState } from 'react'

function Hotels() {
    const [hotels,setHotels] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
    const fetchHotels = async () => {
        try {
            const response = await fetch('http://localhost:3000/hotels');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setHotels(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    fetchHotels();
    },[]);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <h1>Hotels</h1>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <h2>Name:{hotel.id}</h2>
                        <p>Price: {hotel.price}</p>
                        <p>Rating: {hotel.rating}</p>
                        <img src={hotel.img} alt={hotel.name} style={{width:'500px', height:'300px'}} />
                        <p>{hotel.desc}</p>
                        </li>
                ))}
            </ul>
        </div>
)}

export default Hotels
