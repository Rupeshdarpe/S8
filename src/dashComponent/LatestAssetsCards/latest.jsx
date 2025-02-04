import "./latest.scss"

function Latest() {
  return (
    <div className="cardContainer">
      <div className='cardImageContainer'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a009c15ed8d396420153b8b01a890efda8cd7ba8d7c7a2bc1289027c30f158b?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
          className="cardImage"
          alt="Latest asset"
        />
        <div className="cardTitle">Your latest asset</div>
        <div className="cardDaysLeft">5 days left</div>
      </div>
      <div className="cardDescription">
        Luxury 3BHK Apartment in Downtown
      </div>
      <div className="cardDetails">
        <div className="detailAddress">
          <div>123 Main Street, Cityname</div>
          <div className="detailDate">January 20, 2025</div>
        </div>
        <div tabIndex="0" role="button" className="detailButton">Edit / View</div>
      </div>
    </div>
  );
}

export default Latest;







// import React from 'react';
// import styles from '../styles/Dashboard.module.css';

// export const AssetCard = ({ image, title, location, date, daysLeft }) => {
//   return (
//     <div className={styles.assetCard}>
//       <div className={styles.assetImageContainer}>
//         <img loading="lazy" src={image} alt={title} className={styles.assetImage} />
//         <div className={styles.assetBadge}>{daysLeft} days left</div>
//       </div>
//       <div className={styles.assetContent}>
//         <h3 className={styles.assetTitle}>{title}</h3>
//         <div className={styles.assetDetails}>
//           <div className={styles.assetInfo}>
//             <div className={styles.assetLocation}>{location}</div>
//             <div className={styles.assetDate}>{date}</div>
//           </div>
//           <button className={styles.assetAction}>Edit / View</button>
//         </div>
//       </div>
//     </div>
//   );
// };