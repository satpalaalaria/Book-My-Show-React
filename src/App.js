import './App.css';
import ResponsiveAppBar from './Components/Navbar';
import FooterNew from './Components/FooterNew.js'
import { Route, Routes } from "react-router-dom";
import Movies from './Components/Movie';
import PopularTVShow from './Components/PopularTvShow'
import TopRatedMovie from './Components/TopRatedMovie'
import About from './Components/About';
import Home from './Components/Home'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/TopRatedMovie" element={<TopRatedMovie />} />
        <Route path="/PopularTVShow" element={<PopularTVShow />} />
        <Route path="/Movie" element={<Movies />} />
        <Route path='/About/:id' element={<About/>}/>
      </Routes>
      <FooterNew />
    </>
  );
}

export default App;
