import { Link } from "react-router-dom";
import "./CardVertical.css";
const CardVertical = ({ thumbnail, gameTitle, shortDescription, link, tags, platform }) => {
  return (
    <section className="card-vertical">
      <img src={thumbnail} alt={gameTitle} />
      <div className="card-content">
        <h3>{gameTitle}</h3>
        <p>{shortDescription}</p>
        <Link to="/allgames">
          <button className="solid-button">Read more</button>
        </Link>

        <div className="tags-flex">
          <a href="#" className="card-tags">
            {tags}
          </a>
          <a href="#" className="card-tags">
            {platform}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardVertical;
