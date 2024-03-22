import { Link } from "react-router-dom";
import "./TopCard.css";
import TopGamesRank from "../TopGamesPC/TopGamesRank";
const TopCard = ({ gameTitle, id, tags, imgURL }) => {
  document.style;
  return (
    <section className="top-card-content">
      <div className="top-card-rank-wrapper">
        <TopGamesRank rank="1" />
      </div>
      <h1>{gameTitle}</h1>
      <Link to={id}>
        <button type="button" className="solid-button">
          Read More
        </button>
      </Link>
      <div className="top-card-tags-flex">
        <span className="card-tags">{tags}</span>
      </div>
    </section>
  );
};

export default TopCard;
