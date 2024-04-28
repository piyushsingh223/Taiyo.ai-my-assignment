import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ChartComponent from "./Chart";

const Map = () => {
  const {
    data: countryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      return data;
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching country data</p>;
  }

  return (
    <div className="pt-4">
      <div
        className="fixed flex flex-row z-20 items-center justify-items-end sticky top-0"
        style={{ height: "40vh", width: "100%" }}
      >
        <MapContainer
          center={[51.505, -0.09]}
          zoom={5}
          style={{ height: "40vh", width: "100%" }}
          className="p-30"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          {countryData.map((country: any) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Total Cases: {country.cases}</p>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="max-h-80 md:max-h-80 lg:max-h-80">
        <ChartComponent />
      </div>
    </div>
  );
};

export default Map;
