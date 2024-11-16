import React from "react";
import Card from "./Card";
import "./GroupByPriority.css";

const priorityIcons = {
  "No priority": <span className="icon no-priority-icon">...</span>,
  Urgent: (
    <div className="urgent-icon">
      <span>!</span>
    </div>
  ),
  High: (
    <div className="graph-icon">
      <div className="bar low filled"></div>
      <div className="bar medium filled"></div>
      <div className="bar high filled"></div>
    </div>
  ),
  Medium: (
    <div className="graph-icon">
      <div className="bar low filled"></div>
      <div className="bar medium filled"></div>
      <div className="bar high"></div>
    </div>
  ),
  Low: (
    <div className="graph-icon">
      <div className="bar low filled"></div>
      <div className="bar medium"></div>
      <div className="bar high"></div>
    </div>
  ),
};

const priorityLabels = ["No priority", "Urgent", "High", "Medium", "Low"];

const GroupByPriority = ({ tickets }) => {
  // Group tickets by priority
  const groupedByPriority = tickets.reduce((acc, ticket) => {
    const priorityLabel = Object.keys(priorityIcons)[ticket.priority] || "No priority";
    if (!acc[priorityLabel]) acc[priorityLabel] = [];
    acc[priorityLabel].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-content">
      {priorityLabels.map((priority) => (
        <div key={priority} className="column">
          <div className="column-header">
            <div className="column-subheader">
              {priorityIcons[priority]}
              <span className="column-title">{priority}</span>
              <span className="ticket-count">
                {groupedByPriority[priority]?.length || 0}
              </span>
            </div>
            <div className="column-subheader">
              <button className="add-button">+</button>
              <span className="menu-dots">...</span>
            </div>
          </div>
          <div className="column-content">
            {groupedByPriority[priority]?.length > 0 ? (
              groupedByPriority[priority].map((ticket) => (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  showUserImage={true} /* User image can be shown */
                  showStatusIcon={true} /* Status icon not needed for priority */
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

export default GroupByPriority;
