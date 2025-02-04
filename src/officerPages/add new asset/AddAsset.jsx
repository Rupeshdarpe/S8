import ContainerHeader from "../../dashComponent/addNew_asset_header/pathHeader";
import AssetForm from "../../dashComponent/nAssetForm/AssetForm";
import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import ImageUpload from "../../dashComponent/upload/ImageUpload";
import "./addAsset.scss"

const AddAsset = () => {
  return (
    <div className="addAsset">
     <div className="sideContainerAdd">
       <Sidebar />
     </div>
     <div className="addAssetContainer">
      <Header />
     <div className="mainAddAsset">
     <ContainerHeader/>
     <div className="imaegFormContainer">
      <ImageUpload />
      <AssetForm/> 
     </div>
     </div>
     </div>
    </div>
  )
}

export default AddAsset
