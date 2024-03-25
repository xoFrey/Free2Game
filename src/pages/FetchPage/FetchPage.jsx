import { useContext, useEffect } from "react";
import {
  AllGamesFetch,
  GenreValue,
  PlatformValue,
  Recently,
  SortByValue,
} from "../../components/Context/Context";

const FetchPage = () => {
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  const { platformValue } = useContext(PlatformValue);
  const { genreValue } = useContext(GenreValue);
  const { sortByValue } = useContext(SortByValue);
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);

  // *Recently Added games:

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((respo) => respo.json())
      .then((allData) => setRecentlyFetch(allData))
      .catch((err) => console.error("Fehler in Recently-Fetch", err));
  }, []);

  // *All Games

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

  return <></>;
};

export default FetchPage;
