import React, { useState, useEffect, Suspense } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import MovieSkeleton from "./MovieSkeleton";
import Skeleton from "react-loading-skeleton";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const scrollLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "user", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => {
        return item?.id !== passedID;
      });
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="relative flex items-center group pt-8">
        <MdChevronLeft onClick={scrollLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img className="w-full h-auto block text-white" src={`${import.meta.env.VITE_BASEIMGURL}/w500${item?.img}`} alt={item?.title} />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black opacity-0 hover:opacity-80 text-white">
                  <div className="flex flex-col text-center justify-center items-center h-full">
                    <p className="whitespace-normal text-[10px] md:text-sm font-bold mt-2 ">{item?.title}</p>
                    <p className="text-[8px] md:text-[11px] text-gray-300 flex items-center">
                      <AiFillStar className="text-[#FFD23F] mr-0.5" />
                      {item?.rated}
                    </p>
                    <p onClick={() => deleteShow(item.id)} className="absolute top-4 right-4 text-gray-200 md:text-xl">
                      <AiOutlineClose />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight onClick={scrollRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
      </div>
    </div>
  );
};

export default SavedShows;
