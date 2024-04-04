import React, { useEffect, useState } from "react";
import request from "../Request";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MovieSkeleton from "./MovieSkeleton";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const rated = `${movie?.vote_average}`;

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const sliceString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_BASEIMGURL}/original/${movie?.backdrop_path}` || <Skeleton className="h-[550px]"/>} alt={movie?.title}></img>
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">{movie?.title || <Skeleton />}</h1>
          <p className="text-sm md:text-base text-gray-300 flex items-center">
            <AiFillStar className="text-[#FFD23F] mr-0.5" />
            {rated.length > 3 ? rated.slice(0, rated.length - 1) : rated || <Skeleton />}
          </p>
          <div className="my-3">
            <button className=" bg-[#E72929] text-white px-6 py-1 rounded transition ease-in-out hover:scale-95">Play</button>
            <button className="border text-white border-[#E72929] px-4 py-1 rounded ml-4 transition ease-in-out hover:scale-95">Watch Later</button>
          </div>
          <p className="text-gray-500 my-1">Released : {movie?.release_date || <Skeleton />}</p>
          <p className="text-gray-300 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{sliceString(movie?.overview, 150) || <Skeleton count={2}/>}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
