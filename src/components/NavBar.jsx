import Logo from "../layouts/Logo";
import SearchBar from "../layouts/SearchBar";
import "../styles/Navbar.css";

function Navbar({ onSearch }) {
  return (
    <nav className="navbar movie-navbar">
      <div className="container">

        <Logo />

        <SearchBar onSearch={onSearch} />

      </div>
    </nav>
  );
}

export default Navbar;