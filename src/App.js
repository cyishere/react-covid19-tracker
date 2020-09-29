import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Map from "./components/Map";
import Chart from "./components/Chart";
import ListScreen from "./components/ListScreen";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";

import {
  fetchAll,
  fetchDailyData,
  fetchOneRegionData,
  fetchRegionData,
} from "./api";

const App = () => {
  const [cardsData, setCardsData] = useState({});
  const [listData, setListData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [regionData, setRegionData] = useState({});
  const [chartLoading, setChartLoading] = useState(false);
  const [currentVal, setCurrentVal] = useState("Worldwide");

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

  const handleRegionData = async (region) => {
    if (region === "Worldwide") {
      setRegionData({});
      setCurrentVal("Worldwide");
      document
        .querySelectorAll(".list-item")
        .forEach((item) => item.classList.remove("active"));
    } else {
      // get the data of one region
      setChartLoading(true);
      try {
        document
          .querySelectorAll(".list-item")
          .forEach((item) => item.classList.remove("active"));
        document.querySelector(`.list-of_${region}`).classList.add("active");
        setCurrentVal(region);
        setRegionData(await fetchOneRegionData(region));
        setChartLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <Header
            data={listData}
            handleRegionData={handleRegionData}
            currentVal={currentVal}
          />
          <Cards data={cardsData} />
          <Map />
        </div>

        <div className="sidebar">
          <Chart
            dailyData={dailyData}
            regionData={regionData}
            chartLoading={chartLoading}
          />
          <ListScreen data={listData} handleRegionData={handleRegionData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
