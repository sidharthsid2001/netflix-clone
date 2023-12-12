import React, { useEffect, useState } from 'react'
import './Banner.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
import StarRating from '../../Pages/StarRating'
function Banner() {
  const [movie,setMovie] = useState();
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    let randomIndex;
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results=response.data.results;
      if(results.length>0)
      {
        randomIndex=Math.floor(Math.random()*results.length);
        setMovie(results[randomIndex]);
      }
      console.log(results[randomIndex]);
    });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id,type)=>{
    console.log(id) ;
    axios.get(`/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        alert("Trailer not available");
      }
    })
}
  return (
    <>
    <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
     className='banner'>
       <div className ='content'>
          <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
          <div className='banner_buttons'>
            <button className='button'onClick={()=> handleMovie(movie.id,movie.media_type)} >Play</button>
            <button className='button' onClick={() => window.location.href = '/mylist'}>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ""}</h1>
          <h1 className='popularity'>Rating{movie ? <StarRating popularity={movie.popularity}/>:""}</h1>
       </div>
       <div className="fade_bottom"></div>
  
    </div>
    { urlId && <Youtube opts={opts} videoId={urlId.key}/>}
   </>
  )
}

export default Banner
