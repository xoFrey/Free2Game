import { Link } from "react-router-dom";
import "./CardVertical.css";
import { useContext, useState } from "react";
import { GenreValue, PlatformValue } from "../Context/Context";
const CardVertical = ({
  thumbnail,
  gameTitle,
  shortDescription,
  link,
  tags,
  platform,
}) => {
  // const [isFav, setIsFav] = useState(false);

  const { genreValueItem } = useContext(GenreValue);
  return (
    <section className="card-vertical">
      <img src={thumbnail} alt={gameTitle} />
      <div className="card-content">
        <h3>{gameTitle}</h3>
        <p>{shortDescription}</p>
        <div className="fav">
          <Link to={`/details/${link}`}>
            <button className="solid-button">Read more</button>
          </Link>
          {/* <p
            onClick={() => {
              setIsFav(!isFav), fav;
            }}
          >
            ♥
          </p> */}
        </div>
        <div className="tags-flex">
          <a href="#">{tags}</a>
          <a href="#">{platform}</a>
        </div>
      </div>
    </section>
  );
};

export default CardVertical;
