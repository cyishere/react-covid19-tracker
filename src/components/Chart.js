import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent } from "@material-ui/core";

const Chart = ({ dailyData }) => {
  const lineChart = dailyData.length ? (
    <>
      <h2>Daily Cases</h2>
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Cases",
              borderColor: "#00a2ff",
              backgroundColor: "rgba(70, 171, 250, .7)",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "#ee220c",
              fill: true,
            },
          ],
        }}
      />
    </>
  ) : (
    <div>Loading...</div>
  );
  return (
    <div className="chart">
      <Card>
        <CardContent>{lineChart}</CardContent>
      </Card>
    </div>
  );
};

export default Chart;
