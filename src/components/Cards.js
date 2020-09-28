import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = () => {
  return (
    <div className="cards">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className="confirmed">
            <CardContent>
              <Typography
                className="card-title"
                color="textSecondary"
                gutterBottom
              >
                Confirmed
              </Typography>
              <Typography className="card-main" variant="h5" component="h2">
                32,873,748
              </Typography>
              <Typography color="textSecondary">
                Update @ Sun Sep 27, 2020
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="recovered">
            <CardContent>
              <Typography
                className="card-title"
                color="textSecondary"
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography className="card-main" variant="h5" component="h2">
                32,873,748
              </Typography>
              <Typography color="textSecondary">
                Update @ Sun Sep 27, 2020
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="deaths">
            <CardContent>
              <Typography
                className="card-title"
                color="textSecondary"
                gutterBottom
              >
                Deaths
              </Typography>
              <Typography className="card-main" variant="h5" component="h2">
                32,873,748
              </Typography>
              <Typography color="textSecondary">
                Update @ Sun Sep 27, 2020
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
