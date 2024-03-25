import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import { Link } from "react-router-dom";
import { AllGamesFetch, Recently, SearchedGames, UserInput } from "../../components/Context/Context";
import { useContext, useEffect } from "react";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  const { allGames } = useContext(AllGamesFetch);
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);
  const { userInput } = useContext(UserInput);
  const { searchedGames, setSearchedGames } = useContext(SearchedGames);
  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((respo) => respo.json())
      .then((allData) => setRecentlyFetch(allData))
      .catch((err) => console.error("Fehler in Recently-Fetch", err));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const filtered = allGames.filter((item) => item.title.toLowerCase().includes(userInput.toLowerCase()));
    setSearchedGames(filtered);
  }, [allGames, userInput]);

  return (
    <>
      <section className="home">
        <section className="home_title">
          <h1>Find & track the best free-to-play games!</h1>
        </section>
        <div className="home-wrapper">
          <RecentlyComponent />
          <TopGamesPC />
          <TopGamesBrowser />
          <BackToTop />
        </div>
      </section>

      {userInput != "" ? (
        <section className="suggestion">
          {searchedGames.map((item) => (
            <Link to={`/details/${item.id}`}>
              <div onClick={() => setUserInput("")} className="suggestion-items">
                <img src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        " "
      )}
    </>
  );
};

export default Home;
