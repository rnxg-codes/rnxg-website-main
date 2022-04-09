import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeBody from './Components/Home/Home-Body';
import Profiles from './Components/Home/profiles';
import Events from './Components/Pages/Events';
import Project from './Components/Pages/Project';





function App() {
  return (
<>
<Routes>
        <Route path="/" element={ <HomeBody/> } />
        <Route path="/profiles" element={ <Profiles/> } />
        <Route path="/events" element={ <Events/> } />
        <Route path="/projects" element={ <Project/> } />
       
      </Routes>
{/* <Profiles/> */}
</>
  );
}

export default App;
