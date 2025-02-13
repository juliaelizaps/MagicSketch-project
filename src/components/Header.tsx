import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <h1>MagicSketch</h1>
      <div className="header-components">
      <Link to="/">Home&nbsp;</Link>
      <Link to="/About">About</Link>
      </div>
      
    </nav>
  );
};


