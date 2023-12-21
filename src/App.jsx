import React from "react";

import "./App.css";

import useFetch from "../src/hooks/useFetch";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      
    </div>
  );
}

export default App;
