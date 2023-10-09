import React from 'react'
import '../styles/movieRowContainer.css'
function MovieRowContainer({Img}) {
  return (
    <div className='movieRow'>
    <div className='posterRows'>
    <img src={(Img)} alt="row" />
    </div>
    </div>
  )
}

export default MovieRowContainer
