import { useState } from "react";
import { Eye, Search, Users } from "lucide-react";
import "./table.scss";

const AuctionHistory = () => {
  const allData = Array(50).fill({
    auctionNo: 1,
    propertyName: "Sangam Niwas",
    auctionDate: "23-01-2025",
    status: "Completed",
    address: "Bandra, Mumbai-67",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const currentData = allData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPagination = () => {
    const pages = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 4);
      let end = Math.min(totalPages, currentPage + 4);
      
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
            <button className="add-button">
              <Users size={16} /> Add New Assets
            </button>
          </div>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>AUCTION NO.</th>
                  <th>PROPERTY NAME</th>
                  <th>AUCTION DATE</th>
                  <th>STATUS</th>
                  <th>ADDRESS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{item.propertyName}</td>
                    <td>{item.auctionDate}</td>
                    <td className="status-text">{item.status}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="view-button">
                        <Eye size={16} /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination-container">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
          {getPagination().map((page, index) => (
            <button 
              key={index} 
              className={currentPage === page ? "active" : ""} 
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
      </div>
    </div>
  );
};

export default AuctionHistory;
