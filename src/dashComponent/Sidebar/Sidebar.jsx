// import { NotificationCard } from '../Notification/NotificationCard';
import './Sidebar.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index); // Set the clicked item's index as active
  };

  const menuItems = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/933ed33d38f99306f2b6f688b80cf8d308a57f6175f7957d8e7b54de0d6d2771?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e',
      text: 'Dashboard',
      route: '/',
      
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c3dc081e6eb0d8769ad0e3c14d551a5a0aa803789da959a9d7aac61266a9f87f?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e',
      text: 'Auction',
      route: '/auction',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e697b75b14105adc8cdb5a4a69b0a5c88e17478a27f4eefdd8a219780137b20?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e',
      text: 'My Assets',
      route: '/myAssets',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/074b5cb950db78998387bcc0a321db61957f5060f1adfcfd4a79f609c1aa95d5?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e',
      text: 'Saved Auctions',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eedcaee116aa6f2e86e61b89c188ce92061f30187a1f7baa60b1eaeb5c936017?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e',
      text: 'Profile Settings',
      route: '/profile',
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
      <Link to="/"> 
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a227a67fb1aa60ea4fcfdf701adff7cfa910ebdd82c2188f253364885db64408?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
          alt="Company Logo"
          className="logo"
          />
         </Link>
        <div className="logoText">s8</div>
      </div>
      <div className="separator"></div> {/* Add the separator */}
      <ul className="menu">
      {/* <p className="title">MAIN</p> */}
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.route} className="menu-link"> {/* Add Link component */}
              <img src={item.icon} alt={item.text} className="icon" />
              <div className="text">{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* <NotificationCard/> */}
    </div>
  );
};

export default Sidebar;
