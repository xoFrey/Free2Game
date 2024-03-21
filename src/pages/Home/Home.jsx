import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import CardVertical from "../../components/CardVertical/CardVertical";

const Home = () => {
  return (
    <section className="home">
      <h1>Home</h1>
      <CardVertical
        thumbnail="https://www.freetogame.com/g/540/thumbnail.jpg"
        gameTitle="Overwatch 2"
        shortDescription="Eine kurze beschreibung des Spiels"
        tags="shooter"
      />
      <RecentlyComponent />
      <TopGamesPC />
      <TopGamesBrowser />
    </section>
  );
};

export default Home;
