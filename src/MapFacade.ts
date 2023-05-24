import L from "leaflet";
import MapSingleton from "./ubike-map/MapSingleton";
import MapInitializer from "./ubike-map/MapInitializer";
import MapMarkerLayer from "./ubike-map/MapMarkerLayer";
import MapMarker from "./ubike-map/MapMarker";
import { MapConfig } from "./map.config";

export default class UBikeMapFacade {
  private map: L.Map | null = MapSingleton.getInstance();
  private mapInitializer: MapInitializer;
  private mapMarkerLayer: MapMarkerLayer;

  constructor(
    config: MapConfig,
    public tooltipTemplate: (data: UBikeInfo) => string
  ) {
    if (this.map === null) throw new Error("NO MAP !");

    this.mapInitializer = new MapInitializer(this.map, config);
    this.mapMarkerLayer = new MapMarkerLayer(this.map);

    this.mapInitializer.initializer();
  }
  pinstops(item: UBikeInfo[]) {
    const markers = item.map((data) => {
      const marker = MapMarker.create(data.latLng);
      marker.bindTooltip(this.tooltipTemplate(data));
      return marker;
    });
    this.mapMarkerLayer.addMarkers(markers);
  }

  clearStops() {
    this.mapMarkerLayer.clear();
  }
}
