import React ,{useState}from 'react'
import netflixText from '../assets/Laden Sie Netflix-Logo für mobile Anwendungen.png'
import userIcon from '../assets/usericon.jpeg'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  const[SideMenu,setSideMenu]=useState(false)
  const ShowSideNav = () => setSideMenu(!SideMenu)

  return (
    <div className='navbar'>
     <div className='logo'>
        <div className='navbar-left'>
            <img src={`${netflixText}`} onClick={ShowSideNav}></img>
            <div className={SideMenu?'navSliderOpen':'navSliderClosed'}>
              <Link to ='/home'>Home</Link>
              <Link to ='/search'>Search</Link>
              <Link to ='/trending'>Trending</Link>
              <Link to ='/movies'>Movies</Link>
              <Link to ='/tv-shows'>Tv-Shows</Link>
              <Link to ='/my-list'>My List</Link>
            </div>

        </div>
        <div className='navbar-right'>
            <img src ={`${userIcon}`}></img>
        </div>
     </div>
    </div>
  )
}

export default Navbar
