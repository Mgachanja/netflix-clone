import React from 'react'
import '../styles/topBanner.css'

function TopBanner({bannerImg,description,title}) {
const style={
  backgroundImage:`url(${bannerImg})`
}
  return (
    <div className='banner'>
      <img src={bannerImg} alt='bannerImg'/>
       <h1 className='bannerMovieTitle'>{title}</h1>
        <p className='bannerDescription'>{description.slice(0,600)} ..... </p>
        <div className='fadeBottom'></div>
        <button>Play Now</button>
        <button>Add to my list</button>
    </div>
  )
}

export default TopBanner
