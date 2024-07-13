import React from "react";
import user from "./assets/userProfile.jpg";
import ImageSlider from "./ImageSlider";
import bg2 from "./assets/bg2.jpg"
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <div className="flex gap-80 ">
        <div className="w-28 h-16">
          <h1 className="text-blue-500 font-bold text-center p-4">
            Wandermate
          </h1>
        </div>
        <div className=" h-16 text-center">
          <nav className="flex-row flex text-center gap-16 p-4 font-bold">
            <ol>Home</ol>
            <ol>Destination</ol>
            <ol>TravelPackage</ol>
            <ol>Hotels</ol>
          </nav>
        </div>
        <div className=" h-12 w-28 flex items-center justify-center ">
          <img
            src={user}
            alt=""
            className="h-full  rounded-full object-cover"
          />
        </div>
      </div>
      <div className="relative -mt-16">
        <ImageSlider />
      </div>
      <br />
      <div className="flex  items-center justify-center ">
        <div className="w-3/4 h-36 pl-2 pr-2 16 mb-5 bg-white shadow-2xl" >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            aut dolore officia expedita quae eligendi amet inventore debitis ab
            vero? Consequatur nobis animi veritatis sequi quidem magni soluta
            harum, eius recusandae molestiae eligendi non natus omnis
            dignissimos vel laboriosam nisi illo? Corporis mollitia soluta eos?
            Officiis quidem iusto quod! Cumque cupiditate ut odit dolores
            deserunt molestiae quam incidunt delectus voluptate vitae veritatis
            voluptatibus eaque commodi eligendi, laudantium laborum accusamus
            numquam rem totam exercitationem odio sequi ratione ducimus ullam?
            Laudantium dolor mollitia dolorum omnis aliquam. Officia quas quae
            doloribus odio ipsam reiciendis facere maiores consequuntur
            odio ipsam corrupti.   <button className="font-bold"> See more </button>
          </p>
        </div>

      </div>
      <div className="pl-16 flex flex-col gap-5">
        <ol>Top Hotels</ol>
        <ol>Top Travel Packages</ol>
        <ol> Things To Do</ol>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
