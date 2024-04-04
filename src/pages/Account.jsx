import React, { Suspense } from "react";
import SavedShows from "../components/SavedShows";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="w-full h-full text-white">
          <div className="bg-black/60 absolute w-full h-[400px]"></div>
          <img className="h-[400px] w-full object-cover" src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/25/2022/11/netflix_il_piano_di_abbonamento-1200x675.jpg" alt="" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
        <SavedShows />
      </div>
      <Footer />
    </>
  );
};

export default Account;
