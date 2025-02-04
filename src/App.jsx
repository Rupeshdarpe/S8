
import './App.css'
import Home from './officerPages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAssets from './officerPages/my Assets/MyAssets';
import Single from './officerPages/singlePage/single';
import Profile from './officerPages/profile/Profile';
import Auction from './officerPages/auction/Auction';
import AssetsViwe from './officerPages/my Assets/AssetsView';
import AddAsset from './officerPages/add new asset/AddAsset';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
      {/* <AuctionLanding/> */}
      {/* <h1>Welcome to S8</h1> 
      <SidebarLayout />
       */}
       <Route path="/" element={<Home />} />
       <Route path="/myAssets" element={<MyAssets/>} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/auction" element={<Auction />} />
       <Route path="/view" element={<AssetsViwe />} />
       <Route path="/property/:id" element={<Single />} />
       <Route path="/addNew" element={<AddAsset/>} />

       </Routes>
       </BrowserRouter>
  )
}

export default App
