import React from "react";
import { Routes, Route } from "react-router-dom";
import HotelList from "./hotellist";
import Header from "./header";
import CreateData from "./form";
import "./form.css"
const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
        <Route index element={<HotelList />} ></Route>
          <Route path="hotels" element={<HotelList />} />
          <Route path="search" element={<p>Search Page (Work in Progress)</p>} />
          <Route path="request" element={<p>Notifications Page (Work in Progress)</p>} />
          <Route path="logout" element={<p>Logout Page (Work in Progress)</p>} />
          <Route path="adddata" element={<CreateData />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
