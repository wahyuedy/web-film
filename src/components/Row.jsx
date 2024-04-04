import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MovieSkeleton from "./MovieSkeleton";

const Movie =  React.lazy(() => import( "./Movie"))

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const scrollLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={scrollLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Suspense fallback={<MovieSkeleton />} key={id}>
              <Movie item={item} key={id} />
            </Suspense>
          ))}
        </div>
        <MdChevronRight onClick={scrollRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
      </div>
    </div>
  );
};

export default Row;
