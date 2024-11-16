import React, { useState } from "react";
import DisplayIcon from "./DisplayIcon"; // Import the updated DisplayIcon
import "./DisplayOptions.css";

const DisplayOptions = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="display-options-container">
      <button className="display-button" onClick={toggleDropdown}>
        <DisplayIcon /> {/* Updated Icon */}
        Display <span className="dropdown-arrow">▾</span>
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <span className="dropdown-label">Grouping</span>
            <select
              className="dropdown-select"
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-section">
            <span className="dropdown-label">Ordering</span>
            <select
              className="dropdown-select"
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;
