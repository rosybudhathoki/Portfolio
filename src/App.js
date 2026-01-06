// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Calm from './images/DarkClouds.jpg';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return (
      <div className="loader flex justify-center items-center min-h-screen">
        <HashLoader
          color={'#241d49ff'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative">
        {/* Background image */}
        <img
          className="bg fixed top-0 left-0 w-full h-full object-cover -z-10"
          src={Calm}
          alt="Calm Background"
        />

        <Nav />
        <MoveToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
