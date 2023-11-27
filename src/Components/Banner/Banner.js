import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
function Banner() {
  const [movie,setMovie] = useState();

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
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
     className='banner'>
       <div className ='content'>
          <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ""}</h1>
       </div>
       <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
