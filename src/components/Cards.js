import React from "react";
import { Grid } from "@material-ui/core";
import CardItem from "./CardItem";

const Cards = ({ data }) => {
  const { cases, recovered, deaths, updated } = data;

  if (!cases) {
    return <div className="alert warning mb-20">Loading...</div>;
  }

  return (
    <div className="cards">
      <Grid container spacing={2}>
        <Grid item xs>
          <CardItem
            subject={cases}
            lastUpdate={updated}
            cardTitle="Confirmed"
            cardClass="confirmed"
            cardSubtitle="Number of active cases from COVID-19."
          />
        </Grid>

        <Grid item xs>
          <CardItem
            subject={recovered}
            lastUpdate={updated}
            cardTitle="Recovered"
            cardClass="recovered"
            cardSubtitle="Number of recoveries from COVID-19."
          />
        </Grid>

        <Grid item xs>
          <CardItem
            subject={deaths}
            lastUpdate={updated}
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
