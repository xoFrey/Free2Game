import "./Filter.css";
import { useState, useEffect } from "react";
import ArrowIcon from "./../../assets/svg/ArrowIcon";
const Filter = () => {
  const [drop, setDrop] = useState(true);
  console.log(drop);

  const butee = () => {
    console.log("halloooo");
  };

  return (
    <section className="filter">
      <h2>Filtereded</h2>
      <div className="platform">
        <div className="drop-down">
          <h3>Platform</h3>
          {/* <ArrowIcon setDrop={() => setDrop((drop) => !drop)} /> */}
          {/* <button onClick={() => setDrop((drop) => !drop)}>frffrf</button> */}
          <button onClick={butee}>frffrf</button>
        </div>
      </div>
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
    </section>
  );
};

export default Filter;
