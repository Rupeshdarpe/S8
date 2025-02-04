import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import SingleHeader from "../../dashComponent/singlePage Header/singleHeader";
import Slider from "../../dashComponent/slider/Slider";
import Map from "../../dashComponent/map/Map"; // Import Map component
import { singlePostData } from "../../dummyData"; 
import "./single.scss";

const Single = () => {
  const post = singlePostData[0];
  const pageName = "My Assets";
  const title = post.title;

  return (
    <div className="singlePage">
      <div className="sideContainerS">
        <Sidebar />
      </div>
      <div className="singlePageContainer">
        {/* Main Header */}
        <Header />
         
         <div className="mainSContainer">
        {/* Single Page Header (Centered Above Both Sections) */}
        <SingleHeader pageName={pageName} title={title} />

        {/* Main Content Container */}
         <div className="mainSinglePage">
          {/* Left Side - Property Details */}
          <div className="leftSide">
            <div className="details">
              <Slider images={post.images} />
       <div className="info">
  <div className="info-column">
    <h1>{post.title}</h1>
    <div className="info-item">
      <img src="/pin.svg" alt="location" className="info-icon" />
      <span className="info-label">Address:</span>
      <span className="info-value">{post.address}</span>
    </div>

    <div className="info-item">
      <img src="/price-tag.svg" alt="price" className="info-icon" />
      <span className="info-label">Price:</span>
      <span className="info-value highlight">₹ {post.price}</span>
    </div>

    <div className="info-item">
      <img src="/link.svg" alt="link" className="info-icon" />
      <span className="info-label">Enquiry URL:</span>
      <a href={post.enquiryUrl} className="info-link">{post.enquiryUrl}</a>
    </div>

    <div className="info-item description">
      <img src="/description.svg" alt="description" className="info-icon" />
      <span className="info-label">Description:</span>
      <p className="info-value">{post.description}</p>
    </div>
  </div>
</div>
         </div>
        </div>

          {/* Right Side - Auction Details & Map */}
          <div className="rightSide">
            {/* Auction & Property Details */}
            <div className="auctionDetails">
  <div className="auction-column">
    <div className="auctionItem">
      <span className="label">Category:</span>
      <span className="value">{post.category}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Date:</span>
      <span className="value">{post.auctionDate}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Time:</span>
      <span className="value">{post.auctionTime}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Area:</span>
      <span className="value">{post.area} sq.ft</span>
    </div>
    <div className="auctionItem">
      <span className="label">Bank Name:</span>
      <span className="value">{post.bankName}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Contact No.:</span>
      <span className="value">{post.contactNo}</span>
    </div>
  </div>
</div>


            {/* Map Section */}
            <h3>Property Location :</h3>
            <Map
              items={[
                {
                  id: post.id,
                  latitude: post.latitude,
                  longitude: post.longitude,
                  img: post.images[0], // Using first image as a marker
                  title: post.title,
                  category: post.category,
                  price: parseInt(post.price.replace(/,/g, ""), 10), // Convert price to number
                },
              ]}
            />

            {/* Action Buttons */}
            <div className="actionButtons">
            <button className="delete">
              <img src="/delete2.svg" alt="Delete" className="button-icon" />
              Delete
            </button>
            <button className="edit">
              <img src="/edit.svg" alt="Edit" className="button-icon" />
               Edit
            </button>
            <button className="done">
              <img src="/done.svg" alt="Done" className="button-icon" />
                Done
            </button>
            </div>

          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
