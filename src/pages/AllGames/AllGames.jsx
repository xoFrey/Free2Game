import "./AllGames.css";
import Filter from "./../../components/Filter/Filter";
import CardVertical from "./../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import { useContext, useEffect, useState } from "react";
import allGamesImage from "../../../public/img/allGames.jpg";
import {
  GenreValue,
  PlatformValue,
  UserInput,
} from "../../components/Context/Context";
import { SortByValue } from "./../../components/Context/Context";

const AllGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState("");
  const { platformValue } = useContext(PlatformValue);
  const { genreValue } = useContext(GenreValue);
  const { sortByValue } = useContext(SortByValue);
  const { userInput } = useContext(UserInput);

  useEffect(() => {
    fetch(
      `https://www.freetogame.com/api/games?${
        platformValue != "" ? "platform=" + platformValue : ""
      }&${genreValue != "" ? "category=" + genreValue : ""}&${
        sortByValue != "" ? "sort-by=" + sortByValue : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setAllGames(data))
      .catch((err) => console.log("All Games Fetch", err));
  }, [platformValue, genreValue, sortByValue]);

  useEffect(() => {
    const filtered = allGames.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchedGames(filtered);
  }, [allGames, userInput]);

  return (
    <section className="all-games">
      <Title backgroundImage={allGamesImage} title={"All Games"} />
      <Filter allGames={allGames} />
      {allGames && userInput === "" ? (
        <div className="allgames-cards">
          {allGames.map((item, index) => (
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
        <div className="allgames-cards">
          {searchedGames.map((item) => (
            <div className="single-cards">
              <CardVertical
                thumbnail={item.thumbnail}
                gameTitle={item.title}
                tags={item.genre}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllGames;
