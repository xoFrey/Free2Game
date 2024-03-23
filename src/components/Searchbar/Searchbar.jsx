import "./Searchbar.css";
import Logo from "./../../assets/svg/Logo";
import SearchIcon from "./../../assets/svg/SearchIcon";
const Searchbar = () => {
  return (
    <section className="searchbar">
      <div>
        <Logo />
        <h2>Free2Game</h2>
      </div>
      <div className="user-input">
        <SearchIcon />
        <input type="text" name="search" id="search" placeholder="" />
      </div>
    </section>
  );
};

export default Searchbar;
