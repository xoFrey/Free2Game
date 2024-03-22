import "./Searchbar.css";
import Burgermenu from "./../../../assets/svg/Burgermenu";
const Searchbar = () => {
  return (
    <section className="searchbar">
      <img src="/public/img/LogoGames.svg" alt="" />
      <input type="text" name="search" id="search" />
    </section>
  );
};

export default Searchbar;
