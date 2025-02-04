import "./home.scss"

import TopAuctioners from "../../dashComponent/auctioners/TopAuctioners";
import Latest from "../../dashComponent/LatestAssetsCards/latest";
import Sidebar from "../../dashComponent/Sidebar/Sidebar"
import News from "../../dashComponent/News & Updates/newsUpdate";
import Header from "../../dashComponent/nav/header/Header";
import CardsContainer from "../../dashComponent/Cards/Cards";

const Home = () => {
  return (
    <div className="home">
    <div className="sideContainer">
      <Sidebar />
    </div>
    <div className="homeContainer">
      <Header />
  
      {/* Separator placed correctly */}
      {/* <div className="separator2"></div> */}
  
      <div className="latestAssetContainer">
        <Latest />
        <News />
      </div>
      <div className="auctionersContainer">
        <CardsContainer />
        <TopAuctioners />
      </div>
    </div>
  </div>
  
  )
}

export default Home;




// import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar Component
// // import Header from '../comp2/header/Header';
// // import Card from './LatestAssetsCards/latest';
// // import News from './News.jsx';
// // import Auction from './Auction.jsx';
// import TopAuctioners from "../auctioners/TopAuctioners";
// import { Header } from "../comp2/header/Header";
// import "./dash.scss"

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <Header />
//       <div className="main-content">
//       <div className="dashboardLeft">
//          {/* <Card /> */}
//            {/* <News /> */}
//         </div>
//         <div className="dashboardRight">
//           {/* <Auction /> */}
//           <TopAuctioners />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;