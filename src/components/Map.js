import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@material-ui/core";

const position = [51.505, -0.09];
const zoom = 13;

const Map = () => {
  return (
    <div className="map">
      <Card>
        <CardContent>
          <LeafletMap center={position} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LeafletMap>
        </CardContent>
      </Card>
    </div>
  );
};

export default Map;
