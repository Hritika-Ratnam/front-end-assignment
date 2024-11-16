import React from "react";
import Card from "./Card";
import "./GroupByUser.css";
import dummyUser from "../assets/dummy-user.png";

const GroupByUser = ({ tickets, users }) => {
  // Group tickets by user
  const groupedByUser = users.reduce((acc, user) => {
    acc[user.name] = tickets.filter((ticket) => ticket.userId === user.id);
    return acc;
  }, {});

  return (
    <div className="kanban-content">
      {Object.keys(groupedByUser).map((user) => (
        <div key={user} className="column">
          <div className="column-header">
            <div className="column-subheader">
              <img
                src={dummyUser}
                alt={user}
                className="user-avatar"
              />
              <span className="column-title">{user}</span>
              <span className="ticket-count">
                {groupedByUser[user].length || 0}
              </span>
            </div>
            <div className="column-subheader">
              <button className="add-button">+</button>
              <span className="menu-dots">...</span>
            </div>
          </div>
          <div className="column-content">
            {groupedByUser[user].length > 0 ? (
              groupedByUser[user].map((ticket) => (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  showUserImage={false}
                  showStatusIcon={true} /* Show status icon here */
                />
              ))
            ) : (
              <p className="empty-column">No tickets</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupByUser;
