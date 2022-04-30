import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import RecentItems from "../RecentItems/RecentItems";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <RecentItems />
      <Reviews />
    </div>
  );
};

export default Home;
