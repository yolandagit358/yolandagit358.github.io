import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import logo from './logo.svg';
import Home from './Pages/Home';
import Works from "./Pages/Works";
import Projects from "./Pages/Projects";
import Noir from "./Pages/Noir";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/noirdenoir" element={<Noir />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </HashRouter>
  );
}

export default App;
