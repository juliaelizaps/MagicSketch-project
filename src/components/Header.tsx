import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>MagicSketch</h1>
      <Link to="/">Início</Link>
    </nav>
  );
};

export default Header;

