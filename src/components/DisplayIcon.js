import React from "react";

const DisplayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="display-icon"
    >
      {/* First Line */}
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="19" y1="5" x2="19" y2="7"></line>

      {/* Second Line */}
      <line x1="3" y1="12" x2="21" y2="12"></line> 
      <line x1="5" y1="11" x2="5" y2="13"></line>

      {/* Third Line */}
      <line x1="3" y1="18" x2="21" y2="18"></line> 
     <line x1="19" y1="17" x2="19" y2="19"/>

    </svg>
  );
};

export default DisplayIcon;
