import { LatLngExpression } from "leaflet";

type MapConfig = {
  coordinate: LatLngExpression;
  zoomLevel: number;
  titleLayerURL: string;
  containerID: string;
};
export default {
  coordinate: [25.033, 121.5654],
  zoomLevel: 13,
  titleLayerURL: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  containerID: "map",
} as MapConfig;
