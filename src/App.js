import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar/Nav";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
</Routes>
    </Router>
   
  )
}

export default App;