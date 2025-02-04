// components/AssetForm.jsx
import { useState } from "react";
import "./assetForm.scss";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    auctionDate: "",
    auctionTime: "",
    area: "",
    price: "",
    description: "",
    contact: "",
    nearbyPlaces: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving Data: ", formData);
    alert("Asset Saved Successfully!");
  };

  const handleCancel = () => {
    setFormData({
      category: "",
      auctionDate: "",
      auctionTime: "",
      area: "",
      price: "",
      description: "",
      contact: "",
      nearbyPlaces: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <div className="asset-form">
      <div className="form-group">
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select the category of the asset</option>
          <option value="Real Estate">Residental</option>
          <option value="Vehicle">Commercial</option>
          <option value="Electronics">Industrial</option>
        </select>
      </div>

      <div className="form-group">
        <label>Auction Date:</label>
        <input type="date" name="auctionDate" value={formData.auctionDate} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Auction Time:</label>
        <input type="time" name="auctionTime" value={formData.auctionTime} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Area (per sqft):</label>
        <input type="number" name="area" placeholder="Enter asset area" value={formData.area} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input type="number" name="price" placeholder="Enter Price in Rs." value={formData.price} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" placeholder="Enter asset description" value={formData.description} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label>Contact No:</label>
        <input type="text" name="contact" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Nearby Places:</label>
        <input type="text" name="nearbyPlaces" placeholder="Enter Nearby Places" value={formData.nearbyPlaces} onChange={handleChange} />
      </div>

      <div className="form-group location">
        <label>Location:</label>
        <input type="text" name="latitude" placeholder="Enter Latitude" value={formData.latitude} onChange={handleChange} />
        <input type="text" name="longitude" placeholder="Enter Longitude" value={formData.longitude} onChange={handleChange} />
      </div>

      <div className="button-group">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AssetForm;
