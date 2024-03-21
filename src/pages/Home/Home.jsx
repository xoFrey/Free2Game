import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";

const Home = () => {
  return (
    <section className="home">
      <section className="home_title">
        <h1>Find & track the best free-to-play games!</h1>
      </section>
      <RecentlyComponent />
      <TopGamesPC />
      <TopGamesBrowser />
    </section>
  );
};

export default Home;
