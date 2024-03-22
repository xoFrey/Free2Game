import "./AllGames.css";
import Filter from "./../../components/Filter/Filter";
import CardVertical from "./../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import { useEffect, useState } from "react";
import allGamesImage from "../../../public/img/allGames.jpg";


const AllGames = () => {
  const [games, setGames] = useState("");

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log("All Games Fetch", err));
  }, []);

  return (
    <section className="all-games">
      <Title url="../../../public/img/allGames.jpg" title="All Games" />
      <h2>All Games</h2>

      <Title backgroundImage={allGamesImage} title={"All Games"} />
      <Filter />
      {games ? (
        <div className="allgames-cards">
          {games.slice(0, 14).map((item, index) => (
            <div className="single-cards" key={index}>
              <CardVertical
                thumbnail={item.thumbnail}
                gameTitle={item.title}
                tags={item.genre}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};

export default AllGames;
