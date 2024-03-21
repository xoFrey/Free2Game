import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";

const Home = () => {
  return (
    <section className="home">
      <h2>home</h2>
      <RecentlyComponent />
      <TopGamesPC />
      <TopGamesBrowser />
    </section>
  );
};

export default Home;
