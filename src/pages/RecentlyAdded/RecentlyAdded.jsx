import "./RecentlyAdded.css";

import CardVertical from "../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import recentlyImage from "../../../public/img/RecentGames.jpg";
import { useContext, useEffect } from "react";
import { Recently } from "../../components/Context/Context";
const RecentlyAdded = () => {
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);

  return (
    <section className="recently-added">
      <Title backgroundImage={recentlyImage} title="Recently Added" />
      <article>
        {recentlyFetch ? (
          recentlyFetch.map((singleRecently, index) => (
            <div className="single-cards " key={index}>
              <CardVertical
                thumbnail={singleRecently.thumbnail}
                alt={singleRecently.item}
                gameTitle={singleRecently.title}
                tags={singleRecently.genre}
                platform={singleRecently.platform}
              />
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </article>
    </section>
  );
};

export default RecentlyAdded;
