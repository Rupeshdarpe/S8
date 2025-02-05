import { useState } from 'react';
import properties from "../../dummyData"; // Import your dummy data
import './cards.scss';

const CardsContainer = () => {
  const [showAll, setShowAll] = useState(false); // State to control whether to show all cards

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
              </div>
              <div className="cardBody">
                <h4>{property.title}</h4>
                <p>{property.address}</p>
                <p>{property.auctionDate}</p>
                <a href={`/property/${property.id}`} className="viewButton">View now</a>
              </div>
            </div>
          ))}
        </div>
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
