import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter
import { HotelWebsite } from "./lib/organisms/HotelWebsite/hotelWebsite";
import { HotelDetails } from "./lib/molecules/HotelDetails/hotelDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HotelWebsite />} />
      <Route path="/home" element={<HotelDetails />} />
    </Routes>
  );
};

export default App;
