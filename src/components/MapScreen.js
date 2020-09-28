import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Card, CardContent } from "@material-ui/core";

const position = [51.505, -0.09];

const MapScreen = () => {
  return (
    <div className="map">
      <Card>
        <CardContent>
          <Map center={position} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapScreen;
