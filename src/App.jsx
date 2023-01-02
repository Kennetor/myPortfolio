// Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/Contact";

// CSS
import "./App.css";

function App() {
  return (
    <>
      <nav className="navRoutes">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Contact" element={<ContactPage />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </nav>
      <div className="test">
        <h1>You just landed</h1>
      </div>
    </>
  );
}

export default App;
