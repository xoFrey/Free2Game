import "./Filter.css";
import * as React from "react";
import { useState } from "react";
const Filter = () => {
  const [drop, setDrop] = useState(true);
  console.log(drop);

  return (
    <section className="filter">
      <h2>Filtereded</h2>
      <div className="platform">
        <div className="drop-down">
          <h3>Platform</h3>
          <button onClick={() => setDrop(false)} type="button">
            Click me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
