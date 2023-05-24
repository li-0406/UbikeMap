import L from "leaflet";
import { MapConfig } from "../map.config";
import { CustomMap } from "./map";

export default class MapInitializer implements CustomMap.Initializer {
  constructor(public readonly map: L.Map, public readonly config: MapConfig) {}

  public initializer(): void {
    const { map, config } = this;
    const { coordinate, zoomLevel, titleLayerURL } = config;

    map.setView(coordinate, zoomLevel);

    L.tileLayer(titleLayerURL).addTo(map);
  }
}
