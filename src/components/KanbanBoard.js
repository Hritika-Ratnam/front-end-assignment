import React, { useState, useEffect, useRef} from "react";
import GroupByStatus from "./GroupByStatus";
import GroupByUser from "./GroupByUser";
import GroupByPriority from "./GroupByPriority";
import DisplayOptions from "./DisplayOptions";

const KanbanBoard = () => {
  const savedGrouping = localStorage.getItem("kanbanGrouping") || "status";
  const savedOrdering = localStorage.getItem("kanbanOrdering") || "priority";
  const isFetched = useRef(false); 
  const [grouping, setGrouping] = useState(savedGrouping);
  const [ordering, setOrdering] = useState(savedOrdering);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);


  // Save current state to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("kanbanGrouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("kanbanOrdering", ordering);
  }, [ordering]);

  // Fetch tickets and users from the API
  useEffect(() => {
    if (!isFetched.current) {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
        isFetched.current = true;
      })
      .catch((err) => console.error("Error fetching data:", err));
    }
  }, []);

  // Sort tickets based on ordering
  const sortedTickets = [...tickets].sort((a, b) => {
    if (ordering === "priority") {
      return b.priority - a.priority; // Descending order by priority
    } else if (ordering === "title") {
      return a.title.localeCompare(b.title); // Ascending order by title
    }
    return 0;
  });

  return (
    <div className="kanban-board">
      <div className="kanban-header">
        <h3>Kanban Board</h3>
        <DisplayOptions
          grouping={grouping}
          setGrouping={setGrouping}
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>
      <div className="kanban-content">
        {grouping === "status" && <GroupByStatus tickets={sortedTickets} />}
        {grouping === "user" && <GroupByUser tickets={sortedTickets} users={users} />}
        {grouping === "priority" && <GroupByPriority tickets={sortedTickets} />}
      </div>
    </div>
  );
};

export default KanbanBoard;
