import React from "react";

const Insights = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g clipPath="url(#clip0_370_2240)">
        <path
          d="M14.5 2.41669C16.0868 2.41669 17.6581 2.72923 19.1241 3.33648C20.5901 3.94372 21.9222 4.83377 23.0442 5.95582C24.1662 7.07786 25.0563 8.40992 25.6635 9.87593C26.2708 11.342 26.5833 12.9132 26.5833 14.5M14.5 2.41669V14.5M14.5 2.41669C7.82655 2.41669 2.41666 7.82658 2.41666 14.5C2.41666 21.1735 7.82655 26.5834 14.5 26.5834C21.1734 26.5834 26.5833 21.1735 26.5833 14.5M14.5 2.41669C21.1734 2.41669 26.5833 7.82659 26.5833 14.5M26.5833 14.5L14.5 14.5M26.5833 14.5C26.5833 16.4069 26.132 18.2867 25.2663 19.9857C24.4006 21.6848 23.1451 23.1548 21.6024 24.2756L14.5 14.5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_370_2240">
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Insights;
