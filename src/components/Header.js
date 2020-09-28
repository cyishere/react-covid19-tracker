import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Header = () => {
  return (
    <header className="header">
      <h1>COVID-19 Data Tracker</h1>

      <div className="selector">
        <FormControl variant="filled">
          <InputLabel id="selectorLabel">Country/Region</InputLabel>
          <Select labelId="selectorLabel" id="selector" defaultValue="">
            <MenuItem value="">Worldwide</MenuItem>
            <MenuItem>China</MenuItem>
            <MenuItem>USA</MenuItem>
            <MenuItem>UK</MenuItem>
          </Select>
        </FormControl>
      </div>
    </header>
  );
};

export default Header;
