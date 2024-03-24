import "./Searchbar.css";
import Logo from "./../../assets/svg/Logo";
import SearchIcon from "./../../assets/svg/SearchIcon";
import { useContext } from "react";
import { UserInput } from "../Context/Context";
const Searchbar = ({ fold }) => {
  const { userInput, setUserInput } = useContext(UserInput);

  return (
    <section className="searchbar">
      <div className={fold ? "slide" : ""}>
        <Logo />
        <h2>Free2Game</h2>
      </div>
      <div className="user-input">
        <SearchIcon />
        <input
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          type="text"
          name="search"
          id="search"
          placeholder=""
        />
      </div>
    </section>
  );
};

export default Searchbar;
