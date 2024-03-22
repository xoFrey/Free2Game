import "./TopGamesPC.css";
import TopCard from "./../TopCard/TopCard";
import CardHorizontal from "./../CardHorizontal/CardHorizontal";
import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
const TopGamesPC = () => {
  const [topGameData, setTopGameData] = useState([]);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=popularity?platform=browser")
      .then((res) => res.json())
      .then((apiData) => setTopGameData(apiData))
      .catch((error) => console.log("Error in TopGamesPC.jsx fetch", error));
  }, []);
  console.log(topGameData);

  const [topGameData, setTopGameData] = useState([]);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=popularity?platform=browser")
      .then((res) => res.json())
      .then((apiData) => setTopGameData(apiData))
      .catch((error) => console.log("Error in TopGamesPC.jsx fetch", error));
  }, []);
  console.log(topGameData);

  return (
    <section className="pc">
    <section className="pc">
      <h2>Top 4 Games for PC in March 2024</h2>
      <div className="top-component-pc-flex">
        {topGameData ? (
          topGameData.slice(0, 1).map((item, index) => (
            <div className="top-card" key={index} style={{ backgroundImage: `url(${item.thumbnail})`, backgroundPosition: "center", backgroundSize: "cover" }}>
              <TopCard gameTitle={item.title} imgURL={item.thumbnail} tags={item.genre} id={`/details/${item.id}`} />
            </div>
          ))
        ) : (
          <p>loading</p>
        )}

      <div className="top-component-pc-flex">
        {topGameData ? (
          topGameData.slice(0, 1).map((item, index) => (
            <div className="top-card" key={index} style={{ backgroundImage: `url(${item.thumbnail})`, backgroundPosition: "center", backgroundSize: "cover" }}>
              <TopCard gameTitle={item.title} imgURL={item.thumbnail} tags={item.genre} id={`/details/${item.id}`} />
            </div>
          ))
        ) : (
          <p>loading</p>
        )}

        <div className="top-games-pc-flex-vertCards">
          {topGameData ? (
            topGameData.slice(1, 4).map((item, index) => (
              <div key={index}>
                <CardHorizontal imgURL={item.thumbnail} gameTitle={item.title} tags={item.genre} rankIndex={index} />
              </div>
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopGamesPC;
