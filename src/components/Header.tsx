import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
