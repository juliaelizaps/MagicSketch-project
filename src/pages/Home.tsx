import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
    const navigate =useNavigate();  
    const handleStartClick = () => {
        navigate("/story-mode");
    };

  return (
    <Layout>
      <h2>START STORY GAME</h2>
      <h4>Complete Story Mode and unlock 10 free coloring sketches!</h4>
      <div className="card">
        <button onClick={handleStartClick}>START</button>
        <p>REWARDS 0/10</p>
      </div>
      <p>Complete Story Mode and unlock 10 free coloring sketches!</p>
      <div className="div2">
       COLORING SKETCH SHOP
      </div>
    </Layout>
  );
};

export default Home;
