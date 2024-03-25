import { useContext, useEffect } from "react";
import {
  AllGamesFetch,
  GenreValue,
  PlatformValue,
  SortByValue,
} from "../../components/Context/Context";

const FetchPage = () => {
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  const { platformValue } = useContext(PlatformValue);
  const { genreValue } = useContext(GenreValue);
  const { sortByValue } = useContext(SortByValue);

  // *Recently Added games:
  

  console.log(allGames);

  return <></>;
};

export default FetchPage;
