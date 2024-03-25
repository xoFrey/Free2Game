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
  AllGamesFetch,
  SearchedGames,
} from "../../components/Context/Context";

import { SortByValue } from "./../../components/Context/Context";
import { Link } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";

const AllGames = () => {
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  const { searchedGames, setSearchedGames } = useContext(SearchedGames);
  const [limit, setLimit] = useState(20);
  const { platformValue } = useContext(PlatformValue);
  const { genreValue } = useContext(GenreValue);
  const { sortByValue } = useContext(SortByValue);
  const { userInput, setUserInput } = useContext(UserInput);

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

  const [genreArray, setGenreArray] = useState(genreValue);
  useEffect(() => {
    setGenreArray([...genreArray, genreValue]);
  }, [genreValue]);

  return (
    <>
      <section className="all-games ">
        <Title backgroundImage={allGamesImage} title={"All Games"} />
        <Filter allGames={allGames} />
        {allGames && userInput === "" ? (
          <>
            <div className="allgames-cards">
              {allGames.slice(0, limit).map((item, index) => (
                <div className="single-cards" key={index}>
                  <CardVertical
                    thumbnail={item.thumbnail}
                    gameTitle={item.title}
                    tags={item.genre}
                    // fav={setFavorites([...favorites, item])}
                  />
                </div>
              ))}
            </div>{" "}
            <div className="more-btn">
              <button
                onClick={() => setLimit(limit + 20)}
                className="solid-button"
              >
                Load More
              </button>
              <button
                onClick={() => setLimit(allGames.length)}
                className="solid-button"
              >
                Show All
              </button>
            </div>
          </>
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
      {userInput != "" ? (
        <section className="suggestion">
          {searchedGames.map((item) => (
            <Link to={`/details/${item.id}`}>
              <div
                onClick={() => setUserInput("")}
                className="suggestion-items"
              >
                <img src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        " "
      )}
      <BackToTop />
    </>
  );
};

export default AllGames;
