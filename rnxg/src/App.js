import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeBody from './Components/Home/Home-Body';
import Profiles from './Components/Home/profiles';





function App() {
  return (
<>
<Router>
        <Route path="/home" element={ <HomeBody/> } />
        <Route path="/profiles" element={ <Profiles/> } />
       
      </Router>

</>
  );
}

export default App;
