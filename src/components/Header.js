import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Header = () => {
  return (
    <header className="header">
      <h1>COVID-19 Data Tracker</h1>

      <FormControl variant="filled">
        <InputLabel>Region</InputLabel>
        <Select>
          <MenuItem>Worldwide</MenuItem>
          <MenuItem>China</MenuItem>
          <MenuItem>USA</MenuItem>
          <MenuItem>UK</MenuItem>
        </Select>
      </FormControl>
    </header>
  );
};

export default Header;
