import React, { useState, useEffect } from "react";
import axios from "../../utilis/axios"
import requests from "../../utilis/requests"

import "./banner.css"

const Banner=() =>{
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData= async()=> {
      try{
        const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ] );
    }
    catch(error){
      console.log("error",error);
    }
    
  } ;
  fetchData();
   
 } ,[]);

   console.log(movie);
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          {/* div > 2 buttons  */}
          <div className="banner_buttons">
            <button className="banner_button play">play</button>
            <button className="banner_button">my list</button>
          </div>
          {/* description */}
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
       </div>
      
    </>
  );
}

export default Banner;
