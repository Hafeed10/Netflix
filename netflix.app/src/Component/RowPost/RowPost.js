import React,{useEffect,useState} from 'react';
import "./RowPost.css";
import { ImgUrl, API_KEY} from '../../constants/Constants'
import axios  from '../../Component/axios';
import Youtub from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
    // .catch(err=>{
    //   alert('Network error')
    // })

  } , [])
  const opts = {
    height:'390',
    width:'100%',
    autoplay:1,
    
  }
  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array ematy');
      }
    })

  }
  let hafeezItems =(index)=> {
    return (
    
      <div className='row' key={index}>
          <h2>{props.title}</h2>
          <div className="posters">
            {movies.map((obj)=>

              <img onClick={()=>handleMovie(obj.id) } className={props.isSmall ? 'smallPoster':'posre'} src={`${ImgUrl+obj.backdrop_path}`} alt="Poster" />
            )}
          </div>

         {urlid && <Youtub opts={opts} videoId={urlid.key}/>}
      </div>
    )
  }
return<div>{hafeezItems()}</div>  

}

export default RowPost;
