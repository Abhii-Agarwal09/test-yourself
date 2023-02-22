import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ColQuestion from "./components/ColorBlindTest/ColQuestion";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
     <Navbar />
  <Dashboard />
  {/* <ColQuestion /> */}
  </div>
  );
};

export default App;
