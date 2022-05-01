import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeBody from './Components/Home/Home-Body';
import Profiles from './Components/Home/profiles';
import Events from './Components/Pages/Events.jsx';
import Project from './Components/Pages/Project';
import Terms from './Components/Pages/terms';
import Privicy from './Components/Pages/Privicy';

import {BarLoader} from 'react-spinners'
import Loader from './Components/Pages/loader';
import ScrollToTop from './Components/Home/ScrolltoTop';



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},1500)
  },[])

  return (
<>  <ScrollToTop/>

<Routes>
        <Route path="/" element={loading ? <Loader loading={loading}/>:<HomeBody/>}   />
        <Route path="/profiles" element={ loading ? <Loader loading={loading}/>:<Profiles/> } />
        <Route path="/events" element={ loading ? <Loader loading={loading}/>:<Events/> } />
        <Route path="/projects" element={ loading ? <Loader loading={loading}/>:<Project/> } />
        <Route path="/Terms" element={ loading ? <Loader loading={loading}/>:<Terms/> } />
        <Route path="/Privicy" element={ loading ? <Loader loading={loading}/>:<Privicy/> } />
       
      </Routes>
     
{/* <Profiles/> */}

</>
  );
}

export default App;
// var loader = document.getElementById("preloader");

