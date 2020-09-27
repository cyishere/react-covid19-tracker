import React from "react";
import "./App.css";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const App = () => {
  return (
    <div className="container">
      <div className="main">
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
      </div>

      <div className="sidebar"></div>
    </div>
  );
};

export default App;
