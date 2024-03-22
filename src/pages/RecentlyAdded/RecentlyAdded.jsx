import "./RecentlyAdded.css";

import CardVertical from "../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
const RecentlyAdded = () => {
  return (
    <section className="recently-added">
      <h2>Recently Added</h2>
      <Title url="../../../public/img/RecentGames.jpg" title="Recently Added" />
      <CardVertical />
    </section>
  );
};

export default RecentlyAdded;
