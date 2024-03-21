import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllGames from "./pages/AllGames/AllGames";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import Details from "./pages/Details/Details";
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import Searchbar from "./components/Header/Searchbar/Searchbar";
import Header from "./components/Header/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/recently" element={<RecentlyAdded />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
