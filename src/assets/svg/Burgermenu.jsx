import { useState } from "react";

const Burgermenu = () => {
  const [fold, setFold] = useState(false);
  return (
    <svg
      onClick={() => setFold((fold) => !fold)}
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="26"
        y1="24"
        x2="48"
        y2="24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="36"
        x2="48"
        y2="36"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="48"
        x2="48"
        y2="48"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Burgermenu;
