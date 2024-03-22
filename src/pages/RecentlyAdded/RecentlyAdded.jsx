import "./RecentlyAdded.css";

import CardVertical from "../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import recentlyImage from "../../../public/img/RecentGames.jpg";
const RecentlyAdded = () => {
  return (
    <section className="recently-added">
      <h2>Recently Added</h2>
      <Title backgroundImage={recentlyImage} title="Recently Added" />
      <CardVertical />
    </section>
  );
};

export default RecentlyAdded;
