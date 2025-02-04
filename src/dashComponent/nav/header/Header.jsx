import { SearchBar } from '../searchBar/SearchBar';
// import {User} from '../user/User';
import { UserAvatar } from '../user/UserAvatar';
import './Header.scss';

const Header = () => {
  return (
    <>
    <header className="headerContainer">
       <div className="wrapper">
      <SearchBar />
      <UserAvatar
       imageSrc="/user.png"
       name="Anima Agrawal"
       address="U.P, India"
       />
      </div>
    </header>
    </>
  );
}
export default Header;