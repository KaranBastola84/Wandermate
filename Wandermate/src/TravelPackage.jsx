import React, { useEffect, useState } from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';

function TravelPackage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:3000/travelPackages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl">Error: {error}</div>;
  }

  if (!packages.length) {
    return <div className="flex justify-center items-center h-screen text-xl">No travel packages found.</div>;
  }

  return (
    <>
      <div className="Header">
        <HomeNav />
      </div>

      <div className="container mx-auto p-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <img src={pkg.img} className="w-full h-64 object-cover" alt='Travel Package' />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-gray-700">Price: <span className="font-semibold">${pkg.price}</span></p>
              <p className="text-gray-700">Duration: <span className="font-semibold">{pkg.duration} days</span></p>
              <p className="text-gray-700">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default TravelPackage;
