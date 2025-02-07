import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate =useNavigate();  
    const handleStartClick = () => {
        navigate("/story-mode");
    };

  return (
    <section>
      <h2>Start story game</h2>
      <h4>Complete Story Mode and unlock 10 free coloring sketches!</h4>
      <div className="card">
        <button onClick={handleStartClick}>START</button>
        <p>REWARDS 0/10</p>
      </div>
      <p>Complete Story Mode and unlock 10 free coloring sketches!</p>
    </section>
  );
};

export default Home;
