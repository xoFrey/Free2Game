import "./Filter.css";
import * as React from "react";
import ArrowIcon from "./../../assets/svg/ArrowIcon";
import { useState } from "react";
const Filter = () => {
  const [hallo, setHallo] = useState(false);
  console.log(hallo);
  return (
    <section className="filter">
      <h2>Filtereded</h2>
      {/* <div className="platform">
        <div className="drop-down">
          <h3>Platform</h3>
          <ArrowIcon setDropDown={() => setDropDown((dropDown) => !dropDown)} />
          <button onClick={() => setHallo((hallo) => !hallo)}>cdcdc</button>
        </div>
      </div> */}
    </section>
  );
};

export default Filter;
