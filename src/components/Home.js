import React, { Fragment } from "react";
import HomeCards from "./HomeCards";

const Home = () => {
  return (
    <Fragment>
      <header className="flex bg-black h-20 justify-center flex-row flex-wrap-wrap">
        <nav>
          <ul className=" mt-4 inline-flex space-x-1 uppercase text-3xl text-white cursor-pointer ">
            <li className="hover:bg-yellow-400 p-2">Home</li>
            <li className="hover:bg-yellow-400 p-2">About us</li>
            <li className="hover:bg-yellow-400 p-2">My Account</li>
          </ul>
        </nav>
      </header>
      <HomeCards />
    </Fragment>
  );
};

export default Home;
