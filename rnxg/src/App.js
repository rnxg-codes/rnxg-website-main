import logo from './logo.svg';
import './App.css';
import Topbox from './Components/Home/topbox';
import Footer from './Components/Home/Footer';
import Anime from './Components/Pages/anime';
import './Components/Pages/anime.css';

function App() {
  return (
    <>
      <Topbox/>
      <Anime />
      <Footer />
    </>
  );
}
export default App;