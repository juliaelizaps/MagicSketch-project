import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryMode from "./pages/StoryMode";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-mode" element={<StoryMode />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
