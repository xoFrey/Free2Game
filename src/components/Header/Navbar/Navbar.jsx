import { Link } from "react-router-dom";
import "./Navbar.css";
import Burgermenu from "../../../assets/svg/Burgermenu";

const Navbar = () => {
  return (
    <section className="navbar">
      <Burgermenu />
      <nav className="show">
        <Link to="/">Home</Link>
        <Link to="/allgames">All Games</Link>
        <Link to="/recently">Recently Added</Link>
        <Link to="/details">Details</Link>
      </nav>
    </section>
  );
};

export default Navbar;
