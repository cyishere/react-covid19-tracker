/*
 * @Author: Chen Yang
 * @Date: 2020-09-28 16:24:26
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-09-28 16:57:05
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

export { fetchAll };
