import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import MapScreen from "./components/MapScreen";
import Chart from "./components/Chart";
import ListScreen from "./components/ListScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <Header />
          <Cards />
          <MapScreen />
        </div>

        <div className="sidebar">
          <Chart />
          <ListScreen />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
