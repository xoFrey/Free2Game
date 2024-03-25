import { Link } from "react-router-dom";
import "./CardHorizontal.css";
import TopGamesRank from "../TopGamesPC/TopGamesRank";
const CardHorizontal = ({ imgURL, gameTitle, tags, id, rankIndex }) => {
  return (
    <section className="card-horizontal">
      <img src={imgURL} alt={gameTitle} />
      <div className="card-horizontal-rank-wrapper">
        <TopGamesRank rank={rankIndex} />
      </div>
      <div className="card-horizontal-content">
        <h3>{gameTitle}</h3>

        <Link to={id}>
          <button type="button" className="solid-button">
            Read More
          </button>
        </Link>
        <span className="card-tags">{tags}</span>
      </div>
    </section>
  );
};

export default CardHorizontal;
