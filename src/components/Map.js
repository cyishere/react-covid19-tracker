import React from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import { Card, CardContent } from "@material-ui/core";
const zoom = 3;

const Map = ({ center, listData }) => {
  return (
    <div className="map">
      <Card>
        <CardContent>
          <LeafletMap center={center} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {listData.map((item, i) => (
              <Circle
                key={i}
                center={[`${item.countryInfo.lat}`, `${item.countryInfo.long}`]}
                color="#3ba2ff"
                radius={Math.round(item.cases / 2.5)}
                fillColor="#3ba2ff"
                fillOpacity={0.5}
              >
                <Popup>
                  {item.country}, {Math.round(item.cases / 2)}
                </Popup>
              </Circle>
            ))}
          </LeafletMap>
        </CardContent>
      </Card>
    </div>
  );
};

export default Map;
