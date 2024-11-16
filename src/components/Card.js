import React from "react";
import "./Card.css";
import dummyUser from "../assets/dummy-user.png"; // Dummy user image placeholder.

const statusIcons = {
  Backlog: <span className="icon backlog-circle"></span>,
  Todo: <span className="icon empty-circle"></span>,
  "In progress": <span className="icon half-filled-circle"></span>,
  Done: <span className="icon filled-circle"></span>,
  Cancelled: <span className="icon cross-circle"></span>,
};

const Card = ({ ticket, showUserImage = true, showStatusIcon = false }) => {
  const { id, title, tag, status } = ticket;

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        {showUserImage && (
          <img src={dummyUser} alt="User" className="user-avatar" />
        )}
      </div>
      <div className="card-title">
        <div className="card-title-content">
          {showStatusIcon && (
            <span className="status-icon">{statusIcons[status]}</span>
          )}
          <h4>{title}</h4>
        </div>
      </div>
      <div className="card-footer">
        <div className="footer-left">
          <div className="icon-box">
            <div className="small-icon-box">
              <span className="exclamation-icon">!</span>
            </div>
          </div>
          <div className="tag">
            <span className="tag-empty-circle"></span>
            <span className="tag-text">{tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
