import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Map from "./components/Map";
import Chart from "./components/Chart";
import ListScreen from "./components/ListScreen";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";

import { fetchAll, fetchRegionData } from "./api";

const App = () => {
  const [cardsData, setCardsData] = useState({});
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchBasicData = async () => {
      setCardsData(await fetchAll());
    };
    fetchBasicData();

    const fetchForRegions = async () => {
      // setListData(await fetchRegionData());
      setListData(await fetchRegionData());
    };
    fetchForRegions();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Header />
          <Cards data={cardsData} />
          <Map />
        </div>

        <div className="sidebar">
          <Chart />
          <ListScreen data={listData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
