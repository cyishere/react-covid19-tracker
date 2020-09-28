import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const CardItem = ({
  subject,
  cardTitle,
  cardSubtitle,
  cardClass,
  lastUpdate,
}) => {
  return (
    <Card className={cardClass}>
      <CardContent>
        <Typography className="card-title" color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography className="card-main" variant="h5" component="h2">
          <CountUp start={0} end={subject.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          Update @ {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
