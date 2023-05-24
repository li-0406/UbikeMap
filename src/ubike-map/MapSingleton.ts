import L from "leaflet";
import mapConfig from "../map.config";

export default class MapSingleton {
  public readonly map = L.map(mapConfig.containerID);
  private static Instance: L.Map | null = new MapSingleton().map;

  constructor() {
    if (this.map === null) {
      console.warn("NO MAP !");
    }
  }

  static getInstance(): L.Map | null {
    return this.Instance;
  }
}
