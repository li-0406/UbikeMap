import L from "leaflet";
import { CustomMap } from "./map";

export default class MapMarkerLayer implements CustomMap.MarkerLayer {
  public readonly layer = L.layerGroup();
  constructor(public readonly map: L.Map) {
    this.layer.addTo(map);
  }

  addMarker(m: CustomMap.Marker): void {
    m.marker.addTo(this.layer);
  }
  addMarkers(m: CustomMap.Marker[]): void {
    m.forEach((item) => this.addMarker(item));
  }
  clear(): void {
    this.layer.clearLayers();
  }
}
