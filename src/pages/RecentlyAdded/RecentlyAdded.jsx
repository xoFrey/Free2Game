import "./RecentlyAdded.css";

import CardVertical from "../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import recentlyImage from "../../../public/img/RecentGames.jpg";
import { useContext, useEffect, useState } from "react";
import { Recently } from "../../components/Context/Context";
import BackToTop from "../../components/BackToTop/BackToTop";
const RecentlyAdded = () => {
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);
  const [limit2, setLimit2] = useState(20);
  return (
    <section className="all-games">
      <Title backgroundImage={recentlyImage} title="Recently Added" />
      <article className="allgames-cards">
        {recentlyFetch ? (
          recentlyFetch.slice(0, limit2).map((singleRecently, index) => (
            <div className="single-cards " key={index}>
              <CardVertical
                thumbnail={singleRecently.thumbnail}
                alt={singleRecently.item}
                gameTitle={singleRecently.title}
                tags={singleRecently.genre}
                platform={singleRecently.platform}
                link={singleRecently.id}
              />
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </article>
      <div className="more-btn">
        <button onClick={() => setLimit2(limit2 + 20)} className="solid-button">
          Load More
        </button>
        <button
          onClick={() => setLimit2(recentlyFetch.length)}
          className="solid-button"
        >
          Show All
        </button>
      </div>
      <BackToTop />
    </section>
  );
};

export default RecentlyAdded;
