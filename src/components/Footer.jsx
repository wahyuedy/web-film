import React from "react";
import { AiOutlineInstagram, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black/30 mt-5 bottom-0">
      <div className="flex py-3 px-10 justify-center items-center gap-3">
        <p className="text-gray-400 ">Created By WahyuEdy</p>
        <a href="https://www.instagram.com/wahyudyp_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl">
          <AiOutlineInstagram />
        </a>
        <a href="https://github.com/wahyuedy" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/wahyu-edy-prasetyo-410433301/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl">
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
