import React, { useEffect, useState } from 'react'
import {API_KEY,ImgUrl} from '../../constants/Constants'
import "./Banner.css";
import axios  from '../../Component/axios';


function Banner() {
  // let obj; 
  const [movie,setMovie] = useState();
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1]);
      setMovie(response.data.results[1])
    })

  }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? ImgUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner;
