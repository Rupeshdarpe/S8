import PropTypes from 'prop-types';
import './NavigationItem.css';

export const NavigationItem = ({ icon, text, isActive }) => {
  return (
    <div className={`navItem ${isActive ? 'navItemActive' : ''}`}>
      <img
        loading="lazy"
        src={icon}
        className="navIcon"
        alt={`${text} icon`}
      />
      <div className="navText">{text}</div>
    </div>
  );
};

NavigationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
