import { Link } from "react-router-dom";
import "./CardVertical.css";
const CardVertical = ({ thumbnail, gameTitle, shortDescription, link, tags }) => {
  // const CardVertical = ({ titel, year, descrption }) => {
  return (
    <section className="card-vertical">
      <img src={thumbnail} alt={gameTitle} />
      <div className="card-content">
        <h3>{gameTitle}</h3>
        <p>{shortDescription}</p>
        <Link to="/allgames">
          <button className="solid-button">Read more</button>
        </Link>
        <hr />
        <div className="tags-flex">
          <span className="card-tags">{tags}</span>
        </div>
      </div>
    </section>
  );
};

export default CardVertical;
