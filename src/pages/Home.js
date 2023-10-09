import React,{useState,useEffect, } from 'react'
import TopBanner from '../components/TopBanner'
import MovieRowContainer from '../components/MovieRowContainer';
import '../styles/home.css'
function Home() {
  const url="https://api.themoviedb.org"  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDczM2ZjZDAxMzNjZTVkYjA4NWEzMTgwYzdmNjExNiIsInN1YiI6IjY0NmUyYjUyYTUwNDZlMDEyNDY5ZWFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LUfdt_JS3fmUYzW3jDzODemSUBTU_JMIkrW5UNXuulk'
    }
  };

const[BannerData,setBannerData]=useState(null)
const[TopRated,setTopRated]=useState(null)

const[Trending,setTrending]=useState(null)
const[loading,setLoading]=useState(true)
let [currentImageIndex, setCurrentImageIndex] = useState(0)
const imgUrl="https://image.tmdb.org/t/p/original"



  useEffect(()=>{
    //movies fetch------------------------------------------------------------
    const fetchMovies=async()=>{
     const response = await  fetch(`${url}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
       const data = await response.json()
       setBannerData(data)
       setLoading(false)
       }
      fetchMovies()
      setCurrentImageIndex(Math.floor(Math.random()*16) )
      

      //fetch trending movies---------------------------------------------------------
       const trendingFetch= async () =>{
        const res = await fetch(`${url}/3/trending/tv/day?language=en-US`, options)
        const data = await res.json()
        setTrending(data)
      }
      
      trendingFetch()

      //fetch top rated shows--------------------------------------------------------
      const topRatedFetch=async()=>{
        const res =await fetch(`${url}/3/movie/top_rated?language=en-US&page=1`,options)
        const data = await res.json()
        setTopRated(data)
      }
      topRatedFetch()
  },[])

  return (
      <div className='homePage'>
        {loading ?(<p>'content loading .....'</p>):
        (<>
          <TopBanner
            title={BannerData.results[currentImageIndex].original_title}
            bannerImg={ imgUrl + BannerData.results[currentImageIndex].backdrop_path} 
            description={BannerData.results[currentImageIndex].overview}/>
         <h1 className='firstTitle'>trending movies</h1>
        <div className='movieRowList'>
         {
            BannerData.results.map((movie) => (
              <MovieRowContainer  Img={imgUrl + movie.poster_path} />
            ))
         }
         </div>

         <p className='Title'>trending today</p>
         <div className='Trending'>   
         {
            Trending.results.map((trending)=>(
              <MovieRowContainer Img={imgUrl+trending.poster_path}/>
            ))          
         }
         </div>

         <p className='Title'>Top Rated</p>
         <div className='topRated'>
         {
          TopRated.results.map((top)=>(
            <MovieRowContainer Img={imgUrl+top.poster_path}/>
          ))
         }
         </div>
          

          </>
          )}
      </div>
    );
  };
export default Home
