import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import {useState , useEffect} from 'react';
import Search from '../src/pages/Search'
import Trending from '../src/pages/Trending' 
import Movies from '../src/pages/Movies'
import TvShows from './pages/TvShows'
import MyList from './pages/MyList'
function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/search" Component={Search} />
        <Route path="/trending" Component={Trending} />
        <Route path="/movies" Component={Movies} />
        <Route path="/tv-shows" Component={TvShows} />
        <Route path="/my-list" Component={MyList} />

      </Routes>
      </Router>
    </div>

  );
}

export default App;
