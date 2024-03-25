import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import CardVertical from "../../components/CardVertical/CardVertical";
import { Recently } from "../../components/Context/Context";
import { useContext, useEffect } from "react";

const Home = () => {
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);
  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((respo) => respo.json())
      .then((allData) => setRecentlyFetch(allData))
      .catch((err) => console.error("Fehler in Recently-Fetch", err));
  }, []);

  return (
    <section className="home">
      <section className="home_title">
        <h1>Find & track the best free-to-play games!</h1>
      </section>
      <div className="home-wrapper">
        <RecentlyComponent />
        <TopGamesPC />
        <TopGamesBrowser />
      </div>
    </section>
  );
};

export default Home;
