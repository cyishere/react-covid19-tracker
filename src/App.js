import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import MapScreen from "./components/MapScreen";
import Chart from "./components/Chart";
import ListScreen from "./components/ListScreen";
import Footer from "./components/Footer";

import { fetchAll } from "./api";

const App = () => {
  const [cardsData, setCardsData] = useState({});
  useEffect(() => {
    const fetchBasicData = async () => {
      setCardsData(await fetchAll());
    };
    fetchBasicData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Header />
          <Cards data={cardsData} />
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
