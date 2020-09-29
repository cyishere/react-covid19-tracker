import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@material-ui/core";

const Chart = ({ dailyData, regionData, chartLoading }) => {
  const lineChart = dailyData.length ? (
    <>
      <h2>Worldwide Daily Cases</h2>
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

  const barChart = chartLoading ? (
    <div>Loading...</div>
  ) : regionData.country ? (
    <>
      <Typography variant="h5" component="h2">
        Current State in {regionData.country}
      </Typography>
      <Typography color="textSecondary" className="mb-20">
        Updated @ {new Date(regionData.updated).toDateString()}
      </Typography>
      <Bar
        data={{
          labels: ["Cases", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(70, 171, 250, .7)",
                "rgba(54,177,0, 0.7)",
                "rgba(238,34,13, 0.7)",
              ],
              data: [regionData.cases, regionData.recovered, regionData.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: false },
        }}
      />
    </>
  ) : null;

  return (
    <div className="chart">
      <Card>
        <CardContent>{regionData.country ? barChart : lineChart}</CardContent>
      </Card>
    </div>
  );
};

export default Chart;
