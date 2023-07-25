import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Nav";
import Home from "./Home/Home";
import Contact from "./components/Contact";
import Skill from "./skills/Skill";
import "./App.css"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Contact />,
      <Skill/>
    </Router>
  );
}

export default App;
