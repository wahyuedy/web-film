import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const ratedList = () => {
    const rated = `${item.vote_average}`;
    if(rated.length > 3) {
      return rated.slice(0, rated.length - 1)
    } else {
      return rated
    }
  }
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();


  const movieId = doc(db, "user", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path,
          rated: ratedList(),
        }),
      });
    } else {
      alert("Please log in into save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img className="w-full h-auto block text-white" src={`${import.meta.env.VITE_BASEIMGURL}/w500${item?.poster_path}`} alt={item?.title} />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black opacity-0 hover:opacity-80 text-white">
        <div className="flex flex-col text-center justify-center items-center h-full">
          <p className="whitespace-normal text-[10px] md:text-sm font-bold mt-2 ">{item.title}</p>
          <p className="text-[8px] md:text-[11px] text-gray-300 flex items-center">
            <AiFillStar className="text-[#FFD23F] mr-0.5" />
            {ratedList()}
          </p>
        </div>
        <p onClick={saveShow}>{like ? <FaHeart className="absolute top-4 left-4 text-red-500" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}</p>
      </div>
    </div>
  );
};

export default Movie;
