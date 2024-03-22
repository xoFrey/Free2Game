import "./AllGames.css";
import Filter from "./../../components/Filter/Filter";
import CardVertical from "./../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
const AllGames = () => {
  return (
    <section className="all-games">
      <h2>All Games</h2>
      <Title url="../../../public/img/allGames.jpg" title="All Games" />
      <Filter />
      <CardVertical />
      {/* daten.map((item)=> (
      <CardVertical titel={item.titel} description="" year={item.year} />
      )) */}
    </section>
  );
};

export default AllGames;
