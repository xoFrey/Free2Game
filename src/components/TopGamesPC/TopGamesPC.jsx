import "./TopGamesPC.css";
import TopCard from "./../TopCard/TopCard";
import CardHorizontal from "./../CardHorizontal/CardHorizontal";
const TopGamesPC = () => {
  return (
    <section className="top-games-pc">
      <h2>Top Games PC</h2>
      <TopCard />
      <CardHorizontal />
    </section>
  );
};

export default TopGamesPC;
