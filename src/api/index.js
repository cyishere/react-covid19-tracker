/*
 * @Author: Chen Yang
 * @Date: 2020-09-28 16:24:26
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-09-28 19:34:28
 */
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// Fetch data for cards
const fetchAll = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log("error", error.message);
  }
};

// Fetch data by region
const FetchByRegion = async (name) => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(`${url}/countries/${name}`);
    return {
      name,
      confirmed,
      recovered,
      deaths,
    };
  } catch (error) {
    console.log("error", error.message);
  }
};

// Fetch data for regions
const fetchRegionData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const regionNames = countries
      .filter((country) => country.name !== "Gambia")
      .map((country) => country.name);

    // let regionDatas = [];

    const regionDatas = regionNames.map(async (name) => {
      return await FetchByRegion(name);
    });

    return Promise.all(regionDatas);
  } catch (error) {
    console.log("error", error.message);
  }
};

export { fetchAll, fetchRegionData };
