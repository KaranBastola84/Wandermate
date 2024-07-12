import React from "react";
import backgroundImage from "./assets/Hehe.jpg";
import backgroundImage2 from "./assets/IMG_1605.jpeg";
import { Link } from "react-router-dom";
import Login from "./assets/Login";
import SignUpp from "./SignUpp";
import Nav from "./Nav";

function SetupPage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex flex-row-reverse gap-96 ">
          <Nav />
         
          <h1>
            <span className="text-yellow-600 ps-8 text-3xl font-bold justify-start items-start">
              Explore.
            </span>
          </h1>
        </div>
        <div className="pt-4">
          <p className="flex justify-center pt-44 text-gray-300 text-2xl">
            The country of himalyas
          </p>
          <h1 className="flex justify-center text-red-50 text-8xl font-bold ">
            <span className="text-red-300">NEP</span> AL
          </h1>
        </div>
        <div className="flex gap-96 pt-52 ">
          <p className="text-red-50 pl-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Nisi aliquam adipisci magnam esse quaerat ut <br />
            accusantium velit aut? Eligendi, corrupti.
          </p>
          <div className=" flex gap-10 text-red-50 pt-12">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Google</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupPage;
