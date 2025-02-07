import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryMode from "./pages/StoryMode";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-mode" element={<StoryMode />} />
      </Routes>
    </Router>
  );
};

export default App;
