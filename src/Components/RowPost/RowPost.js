import React from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { API_KEY, imageUrl} from '../../constants/constants'
import { useEffect,useState } from 'react'
import axios from '../../axios'
function RowPost({url, params={}, type="movie",isSmall,title}) {
  const [movies,setMovies] =useState([]);
  const [urlId, setUrlId] = useState('');



console.log({params})

  useEffect(() => {
    axios.get(url, {
      params: params,
    }).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch((error) => {
      alert('Error fetching search results:', error);
    });
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
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
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
             <img onClick={()=>
                handleMovie(obj.id)
            } className={isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
       { urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
