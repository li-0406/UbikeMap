import L, { LatLngExpression } from "leaflet";
import mapConfig from "./map.config";
import fetchUBikeData from "./fetchData";

fetchUBikeData();

const { coordinate, zoomLevel, titleLayerURL, containerID } = mapConfig;

const map = L.map(containerID);

map.setView(coordinate, zoomLevel);

L.tileLayer(titleLayerURL).addTo(map);
