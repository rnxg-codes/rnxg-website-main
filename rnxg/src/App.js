import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeBody from "./Components/Home/Home-Body";
import Profiles from "./Components/Home/profiles";
import Events from "./Components/Pages/Events.jsx";
import Project from "./Components/Pages/Project";
import Terms from "./Components/Pages/terms";
import Privicy from "./Components/Pages/Privicy";

import Loader from "./Components/Pages/loader";
import ScrollToTop from "./Components/Home/ScrolltoTop";
import Registation from "./Components/Pages/Registation";
import Celebration from "./Components/Home/celebration";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-228810443-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  //
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  //
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={loading ? <Loader loading={loading} /> : <HomeBody />}
        />
        <Route
          path="/profiles"
          element={loading ? <Loader loading={loading} /> : <Profiles />}
        />
        <Route
          path="/events"
          element={loading ? <Loader loading={loading} /> : <Events />}
        />
        <Route
          path="/projects"
          element={loading ? <Loader loading={loading} /> : <Project />}
        />
        <Route
          path="/Terms"
          element={loading ? <Loader loading={loading} /> : <Terms />}
        />
        <Route
          path="/Privicy"
          element={loading ? <Loader loading={loading} /> : <Privicy />}
        />
        <Route
          path="/cele"
          element={loading ? <Loader loading={loading} /> : <Celebration />}
        />
        <Route
          path="/registations"
          element={
            loading ? <Registation loading={loading} /> : <Registation />
          }
        />
      </Routes>
      {/* <Profiles/> */}
    </>
  );
}

export default App;
// var loader = document.getElementById("preloader");
