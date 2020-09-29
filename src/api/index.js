/*
 * @Author: Chen Yang
 * @Date: 2020-09-28 16:24:26
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-09-29 21:19:34
 */
import axios from "axios";
const basicUrl = "https://disease.sh/v3/covid-19",
  extraUrl = "https://covid19.mathdro.id/api";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

// Fetch data for cards
const fetchAll = async () => {
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(`${proxyUrl}${basicUrl}/all`);

    return { cases, recovered, deaths, updated };
  } catch (error) {
    console.log("error", error.message);
  }
};

const fetchRegionData = async () => {
  try {
    const { data } = await axios.get(`${proxyUrl}${basicUrl}/countries`);
    return data.map((item) => {
      return { cases: item.cases, country: item.country };
    });
    // return { cases, country };
  } catch (error) {
    console.log("error", error.message);
  }
};

// Fetch daily data
const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${extraUrl}/daily`);

    const modifiedData = data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log("error", error.message);
  }
};

// Fetch one region data
const fetchOneRegionData = async (region) => {
  try {
    const { data } = await axios.get(
      `${proxyUrl}${basicUrl}/countries/${region}`
    );

    return {
      country: data.country,
      countryInfo: data.countryInfo,
      cases: data.cases,
      recovered: data.recovered,
      deaths: data.deaths,
      updated: data.updated,
    };
  } catch (error) {
    console.log("error", error.message);
  }
};

export { fetchAll, fetchRegionData, fetchDailyData, fetchOneRegionData };
