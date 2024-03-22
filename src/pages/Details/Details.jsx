import Title from "../../components/Title/Title";
import { useEffect, useState } from "react";
import "./Details.css";

const Details = () => {
  // ---useState
  const [singleGame, setSingleGame] = useState(null);

  // ---fetch
  useEffect(() => {
    fetch("https://www.freetogame.com/api/game?id=452")
      .then((res) => res.json())
      .then((fetchData) => setSingleGame(fetchData))
      .catch((err) => console.error("fetch error at detailpage", err));
  }, []);
  // console.log(singleGame);
  // console.log(singleGame?.screenshots[0]?.image);
  // ---link to game
  const linkToGame = () => {
    window.location.href = `${singleGame.game_url}`;
  };
  // ========== RENDERING ==========
  return (
    <section className="details">

      <h2>Details</h2>
      <Title />

      {singleGame ? (
        <>
          <img src={singleGame.screenshots[0].image} alt="" />
          <h2>{singleGame.title}</h2>
          <div className="detail__left">
            <img src={singleGame.screenshots[1].image} alt="" />
            <h3>Platform: {singleGame.platform}</h3>
            <div onClick={linkToGame}>PLAY NOW</div>
          </div>
          <h3>About</h3>
          <div className="details__description">
            {singleGame.description.split("\r\n\r\n").map((taco, index) => (
              <p key={index} className="details__description--paragraph">
                {taco}
              </p>
            ))}
          </div>
          <p>{singleGame.genre}</p>
          <img src={singleGame.screenshots[2].image} alt="" />
          <img src={singleGame.screenshots[3].image} alt="" />
          <div className="details__footer">
            <div className="details__footer--left">
              <h3>Additional Information</h3>
              <p>
                Please note this free-to-play game may or may not offer optional
                in-game purchases.
              </p>
              <h4>
                Developer<span>{singleGame.developer}</span>
              </h4>
              <h4>
                Publisher<span>{singleGame.publisher}</span>
              </h4>
              <h4>
                Release Date<span>{singleGame.release_date}</span>
              </h4>
            </div>
            <div className="details__footer--right">
              <h3>Minimum System Requirements {singleGame.platform}</h3>
              <div>
                <h4>
                  os<span>{singleGame.minimum_system_requirements.os}</span>
                </h4>
                <h4>
                  Memory
                  <span>{singleGame.minimum_system_requirements.memory}</span>
                </h4>
                <h4>
                  Storage
                  <span>{singleGame.minimum_system_requirements.storage}</span>
                </h4>
              </div>
              <div>
                <h4>
                  Processor
                  <span>
                    {singleGame.minimum_system_requirements.processor}
                  </span>
                </h4>
                <h4>
                  Graphics
                  <span>{singleGame.minimum_system_requirements.graphics}</span>
                </h4>
                <h4>
                  Additional Notes<span>PLACEHOLDER</span>
                </h4>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Details;
