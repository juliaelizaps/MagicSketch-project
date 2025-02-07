import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryMode from "./pages/StoryMode";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-mode" element={<StoryMode />} />
      </Routes>
    </Router>
  );
};

export default App;
