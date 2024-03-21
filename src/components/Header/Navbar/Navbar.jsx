import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/allgames">All Games</Link>
      <Link to="/recently">Recently Added</Link>
      <Link to="/details">Details</Link>
    </nav>
  );
};

export default Navbar;
