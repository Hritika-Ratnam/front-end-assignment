import React from "react";
import Card from "./Card";
import "./GroupByStatus.css";

const GroupByStatus = ({ tickets }) => {
  const states = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  // SVG Icons for each state
  const icons = {
    Backlog: <span className="icon backlog-circle"></span>,
    Todo: <span className="icon empty-circle"></span>,
    "In progress": <span className="icon half-filled-circle"></span>, // Right-side half-filled circle
    Done: <span className="icon filled-circle"></span>, // Blue background with white tick
    Cancelled: <span className="icon cross-circle"></span>,
  };
  

  // Group tickets by status
  const groupedByStatus = tickets.reduce((acc, ticket) => {
    if (!acc[ticket.status]) acc[ticket.status] = [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-content">
      {states.map((status) => (
        <div key={status} className="column">
          <div className="column-header">
            <div className="column-subheader">
             {icons[status]}
            <span className="column-title">{status}</span>
            <span className="ticket-count">{groupedByStatus[status]?.length || 0}</span>
            </div>
            <div className="column-subheader">
            <button className="add-button">+</button>
            <span className="menu-dots">...</span>
            </div>
            
            
          </div>
          <div className="column-content">
            {groupedByStatus[status] ? (
              groupedByStatus[status].map((ticket) => (
                <Card
                ticket = {ticket}
                //   key={ticket.id}
                //   title={ticket.title}
                //   description={ticket.tag[0]}
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

export default GroupByStatus;
