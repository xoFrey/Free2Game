import { useEffect, useState } from "react";
import "./Details.css";

const Details = () => {
  // --- useState
  const [singleGame, setSingleGame] = useState([]);

  // ---fetch
  useEffect(() => {
    fetch("https://www.freetogame.com/api/game?id=452")
      .then((res) => res.json())
      .then((fetchData) => setSingleGame(fetchData))
      .catch((err) => console.error("fetch error at detailpage", err));
  }, []);

  return (
    <section className="details">
      <h2>Details</h2>
    </section>
  );
};

export default Details;
