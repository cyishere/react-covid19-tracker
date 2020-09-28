import React from "react";
import { Grid } from "@material-ui/core";
import CardItem from "./CardItem";

const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;

  if (!confirmed) {
    return <div className="alert warning mb-20">Loading...</div>;
  }

  return (
    <div className="cards">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardItem
            subject={confirmed}
            lastUpdate={lastUpdate}
            cardTitle="Confirmed"
            cardClass="confirmed"
            cardSubtitle="Number of active cases from COVID-19."
          />
        </Grid>

        <Grid item xs={4}>
          <CardItem
            subject={recovered}
            lastUpdate={lastUpdate}
            cardTitle="Recovered"
            cardClass="recovered"
            cardSubtitle="Number of recoveries from COVID-19."
          />
        </Grid>

        <Grid item xs={4}>
          <CardItem
            subject={deaths}
            lastUpdate={lastUpdate}
            cardTitle="Deaths"
            cardClass="deaths"
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
