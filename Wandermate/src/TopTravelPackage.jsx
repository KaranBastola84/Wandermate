import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomeNav from "./HomeNav";
import { Link } from "react-router-dom";

function TopTravelPackage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      author: reviewAuthor,
      comment: reviewText,
      rating: reviewRating,
      date: new Date().toISOString(),
      packageId: selectedPackage.id,
    };

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const savedReview = await response.json();
      setReviews((prevReviews) => [...prevReviews, savedReview]);
      setReviewText("");
      setReviewAuthor("");
      setReviewRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const fetchReviews = async (packageId) => {
    try {
      const response = await fetch(`http://localhost:3000/reviews?packageId=${packageId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    fetchReviews(pkg.id);
  };

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

  return (
    <>
      <div className="Header">
        <HomeNav />
      </div>

      <div className="container mx-auto p-4 flex flex-col">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
            onClick={() => handlePackageClick(pkg)}
          >
            <div className="h-[390px] w-full flex flex-col md:flex-row">
              <div className="h-[390px] w-full md:w-[550px] overflow-hidden flex">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between p-4">
                <h1 className="text-2xl font-bold">{pkg.name}</h1>
                <h2 className="text-xl font-bold">${pkg.price}</h2>
                <div className="mt-4">
                  <Link to={`/ViewTravelDeal/${pkg.id}`}>
                    <button className="bg-black text-white px-4 py-2 rounded">
                      View Deal!
                    </button>
                  </Link>
                </div>
                <div className="mt-2">
                  <p className="mb-2 font-serif">✓ Free Cancellation</p>
                  <p className="font-serif">✓ Reserve now, pay to stay.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="reviews-section container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Reviews for {selectedPackage.name}</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {reviews.map((review) => (
              <li key={review.id} style={{ display: "flex", marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <img src={review.avatar || "https://i.pinimg.com/564x/df/00/8e/df008e504481bf1b92305e6f68d4d92e.jpg"} alt={review.author} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }} />
                <div>
                  <p><strong>{review.author}</strong> <span style={{ color: "gold" }}>{"★".repeat(review.rating)}</span><span style={{ color: "#ccc" }}>{"★".repeat(5 - review.rating)}</span></p>
                  <p>{review.comment}</p>
                  <p style={{ color: "#999" }}>{new Date(review.date).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3>Write a Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <div>
              <label htmlFor="reviewAuthor">Your Name</label>
              <input
                id="reviewAuthor"
                name="reviewAuthor"
                value={reviewAuthor}
                onChange={(e) => setReviewAuthor(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                required
              />
            </div>
            <div>
              <label htmlFor="reviewText">Your Review</label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                required
              />
            </div>
            <div>
              <label htmlFor="reviewRating">Your Rating</label>
              <input
                id="reviewRating"
                name="reviewRating"
                type="number"
                value={reviewRating}
                onChange={(e) => setReviewRating(Number(e.target.value))}
                min="0"
                max="5"
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                required
              />
            </div>
            <button type="submit" style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}>Submit</button>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
}

export default TopTravelPackage;
