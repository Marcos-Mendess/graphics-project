import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Polygon, TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import MainPageTitle from "../Helpers/MainPageTitle";
import "leaflet/dist/leaflet.css";
import { statesData } from "../../static/data";
import { LatLngExpression } from "leaflet";
import { useGetSellsByMonth } from "../../hooks/dashboard";
import { TicketResponse } from "../../types/menu";
import MapCard from "../Card/MapCard";
import L from "leaflet";

const PersonIcon = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.14 2 5 5.14 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"/></svg>
`)}`;

const Logistics = () => {
  const { data: sellsByMonth } = useGetSellsByMonth();

  const locationIcon = L.icon({
    iconUrl: PersonIcon,
    iconSize: [40, 40],
  });

  const markers = [
    {
      x: -19.6027427010281,
      y: -57.19200239308177,
    },
    {
      x: 25.539166,
      y: -103.395049,
    },
  ];

  return (
    <Flex
      minW="100vw"
      minH="100vh"
      flexDir="column"
      alignItems="start"
      ml="40px"
    >
      <MainPageTitle title="Regiões de entrega" />
      <Box h="60%" backgroundColor="#FFFFFF" borderRadius="20px">
        <MapContainer
          center={[-19.6027427010281, -57.19200239308177]}
          zoom={4}
          style={{ width: "88vw", height: "80vh" }}
        >
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(({ x, y }) => {
            return (
              <Marker position={[x, y]} key={Math.random()} icon={locationIcon}>
                <Popup>
                  <MapCard
                    orders
                    monthly
                    data={sellsByMonth as TicketResponse}
                  />
                </Popup>
              </Marker>
            );
          })}
          {statesData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map(
              (coordinate) => [coordinate[1], coordinate[0]]
            );

            return (
              <Polygon
                key={Math.random()}
                pathOptions={{
                  fillColor: "#5B4DA7",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: [3],
                  color: "white",
                }}
                positions={coordinates as LatLngExpression[][]}
              ></Polygon>
            );
          })}
        </MapContainer>
      </Box>
    </Flex>
  );
};

export default Logistics;
