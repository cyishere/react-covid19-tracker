import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Header = ({ data, handleRegionData, currentVal }) => {
  return (
    <header className="header">
      <h1>COVID-19 Data Tracker</h1>

      <div className="selector">
        <FormControl variant="filled">
          <InputLabel id="selectorLabel">Country/Region</InputLabel>
          <Select
            labelId="selectorLabel"
            id="selector"
            onChange={(e) => handleRegionData(e.target.value)}
            value={currentVal}
          >
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {data.map(({ country }, i) => (
              <MenuItem key={i} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </header>
  );
};

export default Header;
