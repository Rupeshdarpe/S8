

import { useState } from 'react';
import properties from "../../dummyData"; // Import your dummy data
import './cards.scss';

const CardsContainer = () => {
  const [likedCards, setLikedCards] = useState({}); // State to track liked cards
  const [showAll, setShowAll] = useState(false); // State to control whether to show all cards

  // Function to toggle the heart icon
  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked state for the card
    }));
  };

  // Number of cards to show by default
  const defaultCardsToShow = 3;
  const cardsToDisplay = showAll ? properties : properties.slice(0, defaultCardsToShow);

  return (
    <div className="CardContainer">
      <h2>Latest Auctions</h2>
      <h3>Showing {cardsToDisplay.length} / {properties.length} results</h3>
      <div className="cardsScrollContainer">
        <div className="assetsList">
          {cardsToDisplay.map((property) => (
            <div key={property.id} className="assetCard">
              <div className="cardHeader">
                <img src={property.imageUrl} alt={property.title} className="propertyImage" />
                <div className="userImageContainer">
                  <img src={property.profileImage} alt="User" className="userImage" />
                </div>
                <button
                  className="heartButton"
                  onClick={() => toggleLike(property.id)}
                >
                  <img
                    src={likedCards[property.id] ? "like1.svg" : "like2.svg"}
                    alt="Like"
                    className="heartIcon"
                  />
                </button>
              </div>
              <div className="cardBody">
                <h4>{property.title}</h4>
                <p>{property.address}</p>
                <p>{property.auctionDate}</p>
                <a href="/view" className="viewButton">View now</a>
              </div>
            </div>
          ))}
        </div>
        {/* "View All" button outside the scrollable container */}
        <div className='viewAllCont'>
        {!showAll && (
          <button className="viewAllButton" onClick={() => setShowAll(true)}>
            View All
          </button>
        )}
        </div>
      </div>
    </div>
  );
};


export default CardsContainer;
