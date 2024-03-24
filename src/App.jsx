import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllGames from "./pages/AllGames/AllGames";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import Details from "./pages/Details/Details";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from "react";
import { GenreValue, PlatformValue, SortByValue, UserInput, LightMode } from "./components/Context/Context";

function App() {
  const [platformValue, setPlatformValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [sortByValue, setSortByValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [lightDark, setLightDark] = useState(false);

  return (
    <LightMode.Provider value={{ lightDark, setLightDark }}>
      <UserInput.Provider value={{ userInput, setUserInput }}>
        <GenreValue.Provider value={{ genreValue, setGenreValue }}>
          <SortByValue.Provider value={{ sortByValue, setSortByValue }}>
            <PlatformValue.Provider value={{ platformValue, setPlatformValue }}>
              <BrowserRouter>
                <Navbar />
                <Searchbar />

                <div className="app">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allgames" element={<AllGames />} />
                    <Route path="/recently" element={<RecentlyAdded />} />
                    <Route path="/details" element={<Details />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </PlatformValue.Provider>
          </SortByValue.Provider>
        </GenreValue.Provider>
      </UserInput.Provider>
    </LightMode.Provider>
  );
}

export default App;
