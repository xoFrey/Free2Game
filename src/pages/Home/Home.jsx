import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import CardVertical from "../../components/CardVertical/CardVertical";

const Home = () => {
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
