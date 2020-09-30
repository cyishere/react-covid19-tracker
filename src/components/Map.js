import React from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import { Card, CardContent } from "@material-ui/core";

let center = [34.80746, -40.4796];
let zoom = 3;

const Map = ({ listData, regionData }) => {
  let data = [];
  if (regionData.country) {
    data.push(regionData);
    center = [regionData.countryInfo.lat, regionData.countryInfo.long];
    if (regionData.cases < 100000) {
      zoom = 10;
    } else {
      zoom = 3;
    }
  } else {
    data.push(...listData);
  }

  return (
    <div className="map">
      <Card>
        <CardContent>
          <LeafletMap center={center} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((item, i) => (
              <Circle
                key={i}
                center={[`${item.countryInfo.lat}`, `${item.countryInfo.long}`]}
                color="#3ba2ff"
                radius={Math.round(item.cases / 2.5)}
                fillColor="#3ba2ff"
                fillOpacity={0.5}
              >
                <Popup>
                  <div className="popup-info">
                    <img src={item.countryInfo.flag} alt={item.country} />
                    <h3>{item.country}</h3>
                    <p className="confirmed">
                      Cases: <strong>{item.cases}</strong>
                    </p>
                    <p className="recovered">
                      Recovered: <strong>{item.recovered}</strong>
                    </p>
                    <p className="deaths">
                      Deaths: <strong>{item.deaths}</strong>
                    </p>
                  </div>
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
