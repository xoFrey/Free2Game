import "./TopGamesPC.css";
import TopCard from "./../TopCard/TopCard";
import CardHorizontal from "./../CardHorizontal/CardHorizontal";
const TopGamesPC = () => {
  return (
    <section className="top-games-pc">
      <h2>Top 4 Games for PC in March 2024</h2>
      <div className="top-games-pc-flex-bigCard">
        <TopCard gameTitle="Game Title" />
        <div className="top-games-pc-flex-vertCards">
          <CardHorizontal />
        </div>
      </div>
    </section>
  );
};

export default TopGamesPC;
