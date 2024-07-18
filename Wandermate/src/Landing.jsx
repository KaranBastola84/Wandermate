import React from 'react'
import { useEffect,useState } from 'react'
import Nav from './Nav';
function Landing() {
    const [hotels,setHotels] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
    const fetchHotels = async () => {
        try {
            const response = await fetch('http://localhost:3000/destination');
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
            <Nav />
      <h1>Destination</h1>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <p>Title: {hotel.title}</p>
                        <p>Weather: {hotel.weather}</p>
                        <img src={hotel.img} alt={hotel.name} style={{width:'500px', height:'300px'}} />
                        <p>{hotel.desc}</p>
                        </li>
                ))}
            </ul>
    </div>
  )
}

export default Landing
