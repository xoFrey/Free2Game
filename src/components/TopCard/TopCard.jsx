import { Link } from "react-router-dom";
import "./TopCard.css";
const TopCard = ({ gameTitle, link, tags }) => {
  document.style;
  return (
    <section className="top-card">
      <h2>{gameTitle}</h2>
      <Link to={link}>
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
