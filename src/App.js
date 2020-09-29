import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Map from "./components/Map";
import Chart from "./components/Chart";
import ListScreen from "./components/ListScreen";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";

import { fetchAll, fetchDailyData, fetchRegionData } from "./api";

const App = () => {
  const [cardsData, setCardsData] = useState({});
  const [listData, setListData] = useState([]);
  const [dailyData, setDailyData] = useState([]);

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

    const fetchForDaily = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchForDaily();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Header data={listData} />
          <Cards data={cardsData} />
          <Map />
        </div>

        <div className="sidebar">
          <Chart dailyData={dailyData} />
          <ListScreen data={listData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
