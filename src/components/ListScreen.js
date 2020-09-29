import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const ListScreen = ({ data, handleRegionData }) => {
  // if (!data.length) {
  //   return "Loading...";
  // }

  return (
    <div className="list-container">
      <Card>
        <CardContent>
          <h2>Cases by Country/Region</h2>
          {!data.length ? (
            <List className="list">
              <ListItem>Loading...</ListItem>
            </List>
          ) : (
            <List className="list">
              {data.map((region, i) => (
                <ListItem
                  key={i}
                  className={`list-item list-of_${region.country}`}
                  onClick={() => handleRegionData(region.country)}
                >
                  <ListItemText
                    primary={region.cases
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    secondary={region.country}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListScreen;
