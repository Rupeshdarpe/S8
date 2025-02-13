import { useState } from "react";
import { Eye, Search, Users, Edit, Trash, Download } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link component for routing
import { singlePostData } from "../../dummyData"; // Adjust the path accordingly
import "./table.scss";

const AuctionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(singlePostData.length / itemsPerPage);

  const startEntry = (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, singlePostData.length);

  const currentData = singlePostData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPagination = () => {
    const pages = [];
    const range = 2; // Number of page numbers to show before and after the current page
  
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - range);
      let end = Math.min(totalPages, currentPage + range);
  
      if (start > 1) pages.push(1);
      if (start > 2) pages.push("...");
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      if (end < totalPages - 1) pages.push("...");
      if (end < totalPages) pages.push(totalPages);
    }
    return pages;
  };

  // Get Status of auction
  const getStatus = (auctionDate) => {
    const currentDate = new Date();
    const auctionDateObj = new Date(auctionDate);
    return auctionDateObj > currentDate ? "Upcoming" : "Completed";
  };

  return (
    <div className="auction-container">
      <div className="auction-box">
        <div className="auction-header">
          <h2>Auction List</h2>
          <div className="auction-actions">
            <div className="search-box">
              <Search className="search-icon" size={16} />
              <input type="text" placeholder="Search records" />
            </div>
            <Link to="/addNew" className="add-button">
              <Users size={16} /> Add New Assets
            </Link>
          </div>
        </div>
        <div className="table-options">
          <label>Show Entries: </label>
          <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>SR. NO.</th>
                  <th>PROPERTY NAME</th>
                  <th>PRICE</th>
                  <th className="date-column">DATE</th> {/* Expanded Date column */}
                  <th>ADDRESS</th>
                  <th>CITY</th>
                  <th>STATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.auctionDate}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>
                      <span className={getStatus(item.auctionDate) === "Completed" ? "completed" : "upcoming"}>
                        {getStatus(item.auctionDate)}
                      </span>
                    </td>
                    <td className="action-buttons">
                      <Link to={`/property/${item.id}`} className="view-button">
                        <Eye size={16} /> View
                      </Link>
                      <button className="edit-button">
                        <Edit size={16} />
                      </button>
                      <button className="delete-button">
                        <Trash size={16} />
                      </button>
                      <button className="download-button">
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination-container">
          <div className="showing-entries">
            Showing {startEntry} to {endEntry} out of {singlePostData.length} results found
          </div>
          <div className="pagination-controls">
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            {getPagination().map((page, index) => (
              <button 
                key={index} 
                className={currentPage === page ? "active" : ""} 
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionHistory;
