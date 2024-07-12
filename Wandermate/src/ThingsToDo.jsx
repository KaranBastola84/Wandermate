import React from 'react'
import { useState,useEffect } from 'react'
import Nav from './Nav';

function ThingsToDo() {
const [hotels,setHotels] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);
useEffect(() => {
const fetchHotels = async () => {
    try{
        const response = await fetch("http://localhost:3000/thingsToDo");
        if(!response.ok){
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
if(loading){
    return <p>Loading...</p>
}
if(error){
    return <p>Error: {error}</p>
}
  return (
    <div>
      <Nav />
      <h1>Things To Do</h1>
      <ul>
        {hotels.map(hotel => (
            <li key={hotel.id}>
                <h2>ID : {hotel.id}</h2>
                <p>{hotel.desc}</p>

            </li>
        ))}
      </ul>
    </div>
  )
}

export default ThingsToDo
