import { Link } from "react-router-dom";
import "./TopCard.css";
import TopGamesRank from "../TopGamesPC/TopGamesRank";
import { useContext } from "react";
import { GenreValue } from "../Context/Context";
const TopCard = ({ gameTitle, id, tags, platform }) => {
  const { setGenreValue } = useContext(GenreValue);
  return (
    <section className="top-card-content">
      <div className="top-card-rank-wrapper">
        <TopGamesRank rank="1" />
      </div>
      <h1>{gameTitle}</h1>
      <Link to={`/details/${id}`}>
        <button type="button" className="solid-button">
          Read More
        </button>
      </Link>
      <div className="top-card-tags-flex">
        <span onClick={() => setGenreValue(tags)} className="card-tags">
          {tags}
        </span>
      </div>
    </section>
  );
};

export default TopCard;
