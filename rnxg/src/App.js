import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeBody from './Components/Home/Home-Body';
import Profiles from './Components/Home/profiles';
import Events from './Components/Pages/Events';





function App() {
  return (
<>
<Routes>
        <Route path="/home" element={ <HomeBody/> } />
        <Route path="/profiles" element={ <Profiles/> } />
        <Route path="/events" element={ <Events/> } />
       
      </Routes>
{/* <Profiles/> */}
</>
  );
}

export default App;
