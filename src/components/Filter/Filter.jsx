import "./Filter.css";
import ArrowIcon from "./../../assets/svg/ArrowIcon";
import { useEffect, useState } from "react";
import CheckboxEmpty from "../../assets/svg/CheckboxEmpty";
import CheckboxChecked from "./../../assets/svg/CheckboxChecked";
import ExitButton from "../../assets/svg/ExitButton";
import XButton from "../../assets/svg/XButton";
const Filter = ({ allGames }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [filterValue, setFilterValue] = useState("");

  const [platformValue, setPlatformValue] = useState(false);
  const [genreValue, setGenreValue] = useState(false);
  const [sortByValue, setSortByValue] = useState(false);

  const [genreList, setGenreList] = useState([]);

  let genreArray = [];

  let platformArray = ["all", "pc", "browser"];
  let sortByArray = ["release-date", "popularity", "alphabetical", "relevance"];

  useEffect(() => {
    allGames
      ? allGames.map((item) => {
          genreArray.push(item.genre);
        })
      : "";
    const genre = genreArray.filter(
      (item, index) => genreArray.indexOf(item) === index
    );
    setGenreList(genre);
  }, [allGames]);

  return (
    <div>
      <section className="hauptfilter">
        <section className="filter">
          <div
            className="filter-headline"
            onClick={() => setFilterValue("platform")}
          >
            <h3>Platform</h3>
            <ArrowIcon
              setIsOpen={() => setIsOpen(!isOpen)}
              className={isOpen && filterValue == "platform" ? "arrowUp" : ""}
            />
          </div>

          <div
            className={`filter-list ${
              isOpen && filterValue == "platform" ? "is-open" : "is-closed"
            }`}
          >
            {platformArray.map((item) => (
              <div
                onClick={() => {
                  setPlatformValue(`${item}`), setIsOpen(!isOpen);
                }}
                className="filter-items"
              >
                {platformValue === `${item}` ? (
                  <CheckboxChecked />
                ) : (
                  <CheckboxEmpty />
                )}
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="filter">
          <div
            className="filter-headline"
            onClick={() => setFilterValue("genre")}
          >
            <h3>Genre/Tags</h3>
            <ArrowIcon
              setIsOpen={() => setIsOpen(!isOpen)}
              className={isOpen && filterValue === "genre" ? "arrowUp" : ""}
            />
          </div>

          <div
            className={`filter-list ${
              isOpen && filterValue === "genre" ? "is-open" : "is-closed"
            }`}
          >
            {genreList.map((item) => (
              <div
                onClick={() => {
                  setGenreValue(`${item}`), setIsOpen(!isOpen);
                }}
                className="filter-items"
              >
                {genreValue === `${item}` ? (
                  <CheckboxChecked />
                ) : (
                  <CheckboxEmpty />
                )}
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="filter">
          <div
            className="filter-headline"
            onClick={() => setFilterValue("sort-by")}
          >
            <h3>Sort By</h3>
            <ArrowIcon
              setIsOpen={() => setIsOpen(!isOpen)}
              className={isOpen && filterValue === "sort-by" ? "arrowUp" : ""}
            />
          </div>

          <div
            className={`filter-list ${
              isOpen && filterValue === "sort-by" ? "is-open" : "is-closed"
            }`}
          >
            {sortByArray.map((item) => (
              <div
                onClick={() => {
                  setSortByValue(`${item}`), setIsOpen(!isOpen);
                }}
                className="filter-items"
              >
                {genreValue === `${item}` ? (
                  <CheckboxChecked />
                ) : (
                  <CheckboxEmpty />
                )}
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="show-filter">
        {platformValue ? (
          <div onClick={() => setPlatformValue("")}>
            <XButton />
            <p>{platformValue}</p>
          </div>
        ) : (
          ""
        )}
        {genreValue ? (
          <div onClick={() => setGenreValue("")}>
            <XButton />
            <p>{genreValue}</p>
          </div>
        ) : (
          ""
        )}
        {sortByValue ? (
          <div onClick={() => setSortByValue("")}>
            <XButton />
            <p>{sortByValue}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Filter;
