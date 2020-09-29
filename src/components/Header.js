import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Header = ({ data }) => {
  return (
    <header className="header">
      <h1>COVID-19 Data Tracker</h1>

      <div className="selector">
        <FormControl variant="filled">
          <InputLabel id="selectorLabel">Country/Region</InputLabel>
          <Select
            labelId="selectorLabel"
            id="selector"
            defaultValue="Worldwide"
          >
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {data.map(({ country, i }) => (
              <MenuItem key={i}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </header>
  );
};

export default Header;
