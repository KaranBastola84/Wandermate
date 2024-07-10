import React from "react";
import backgroundImage from "./assets/Hehe.jpg";

function SetupPage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1>
          {" "}
          <span className="text-yellow-600 ps-8 text-3xl font-bold">
            Explore.
          </span>{" "}
        </h1>
        <p className="flex justify-center pt-48 text-gray-300">
          The country of himalyas
        </p>
        <h1 className="flex justify-center text-red-50 text-8xl font-bold">
          <span className="text-red-300">NEP</span> AL
        </h1>
        <p className="text-red-50 mt-48 pl-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Nisi aliquam adipisci magnam esse quaerat ut <br />
          accusantium velit aut? Eligendi, corrupti.
        </p>
        <div className="flex justify-end gap-10 pr-4 text-red-50 mb-auto">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>Google</p>
        </div>
      </div>
    </>
  );
}

export default SetupPage;
