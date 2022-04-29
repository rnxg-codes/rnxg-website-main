import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeBody from './Components/Home/Home-Body';
import Profiles from './Components/Home/profiles';
import Events from './Components/Pages/Events.jsx';
import Project from './Components/Pages/Project';
import Terms from './Components/Pages/terms';
import Privicy from './Components/Pages/Privicy';





function App() {
  return (
<>
<Routes>
        <Route path="/" element={ <HomeBody/> } />
        <Route path="/profiles" element={ <Profiles/> } />
        <Route path="/events" element={ <Events/> } />
        <Route path="/projects" element={ <Project/> } />
        <Route path="/Terms" element={ <Terms/> } />
        <Route path="/Privicy" element={ <Privicy/> } />
       
      </Routes>
{/* <Profiles/> */}
</>
  );
}

export default App;
