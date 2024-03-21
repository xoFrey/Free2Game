import { useEffect, useState } from "react";
import "./Details.css";

const Details = () => {
  // ---useState
  const [singleGame, setSingleGame] = useState(null);

  // ---fetch
  useEffect(() => {
    fetch("https://www.freetogame.com/api/game?id=452")
      .then((res) => res.json())
      .then((fetchData) => setSingleGame(fetchData))
      .catch((err) => console.error("fetch error at detailpage", err));
  }, []);
  console.log(singleGame);
  console.log(singleGame?.screenshots[0]?.image);
  return (
    <section className="details">
      {singleGame ? (
        <>
          <img src={singleGame.screenshots[0].image} alt="" />
          <h2>{singleGame.title}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Details;
