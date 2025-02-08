import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <h1>MagicSketch</h1>
      <div className="home">
      <Link to="/">Home</Link>
      </div>
      <Link to="/">About</Link>
    </nav>
  );
};


